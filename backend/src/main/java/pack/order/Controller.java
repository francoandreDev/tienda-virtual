package pack.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import pack.errors.ModelNotFoundException;

import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/ordenes")
@org.springframework.stereotype.Controller("orderController")
public class Controller {
	@Autowired
	@Qualifier("orderService")
	private IService primaryService;

	@Autowired
	@Qualifier("cartService")
	private pack.cart.IService secondaryService;
	
	@Autowired
	@Qualifier("productService")
	private pack.product.IService tertiaryService;
	
	@Autowired
	@Qualifier("payService")
	private pack.pay.IService quaternaryService;

	@GetMapping
	public ResponseEntity<List<ResDto>> getAllModels() {
		List<OrderModel> models = primaryService.getAllModels();
		List<ResDto> dtos = models.stream().map(model -> Mapper.toResDto(model)).collect(Collectors.toList());
		return ResponseEntity.ok(dtos);
	}

	@GetMapping("/{id}")
	public ResponseEntity<ResDto> getModelById(@PathVariable Long id) {
		Optional<OrderModel> modelOptional = primaryService.getModelById(id);
		return modelOptional.map(model -> ResponseEntity.ok(Mapper.toResDto(model)))
				.orElse(ResponseEntity.notFound().build());
	}

	@PostMapping
	public ResponseEntity<ResDto> createModel(@RequestBody ReqDto reqDto) {
		Optional<pack.cart.CartModel> secondaryModel = secondaryService.getCartById(reqDto.getCartId());
		if (secondaryModel.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
		
		Optional<pack.product.ProductModel> tertiaryModel = tertiaryService.getProductById(reqDto.getProductId());
		if (tertiaryModel.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
		 
		Optional<Set<pack.pay.PayModel>> quaternaryModel = quaternaryService.getPaysById(reqDto.getPaymentsId());
		if (quaternaryModel.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}

		OrderModel primaryModel = Mapper.toEntity(reqDto, secondaryModel.get(), tertiaryModel.get(), quaternaryModel.get());
		OrderModel createdModel = primaryService.createModel(primaryModel);
		return ResponseEntity.status(HttpStatus.CREATED).body(Mapper.toResDto(createdModel));
	}

	@PutMapping("/{id}")
	public ResponseEntity<ResDto> updateModel(@PathVariable Long id, @RequestBody ReqDto reqDto) {
		Optional<pack.cart.CartModel> secondaryModel = secondaryService.getCartById(reqDto.getCartId());
		if (secondaryModel.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
		
		Optional<pack.product.ProductModel> tertiaryModel = tertiaryService.getProductById(reqDto.getProductId());
		if (tertiaryModel.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
		
		Optional<Set<pack.pay.PayModel>> quaternaryModel = quaternaryService.getPaysById(reqDto.getPaymentsId());
		if (quaternaryModel.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}

		OrderModel primaryModel = Mapper.toEntity(reqDto, secondaryModel.get(), tertiaryModel.get(), quaternaryModel.get());
		try {
			OrderModel updatedModel = primaryService.updateModel(id, primaryModel);
			return ResponseEntity.ok(Mapper.toResDto(updatedModel));
		} catch (ModelNotFoundException ex) {
			return ResponseEntity.notFound().build();
		}
	}

	@DeleteMapping("/{id}")
	public ResponseEntity<Void> deleteModel(@PathVariable Long id) {
		primaryService.deleteModel(id);
		return ResponseEntity.noContent().build();
	}

	@ExceptionHandler(ModelNotFoundException.class)
	public ResponseEntity<String> handleModelNotFoundException(ModelNotFoundException ex) {
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(ex.getMessage());
	}
}