package pack.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import pack.errors.ModelNotFoundException;

import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/cuentas")
@org.springframework.stereotype.Controller("accountController")
public class Controller {

	@Autowired
	@Qualifier("accountService")
	private IService primaryService;

	@Autowired
	@Qualifier("cardService")
	private pack.card.IService secondaryService;
	
	@Autowired
	@Qualifier("cartService")
	private pack.cart.IService tertiaryService;

	@GetMapping
	public ResponseEntity<List<ResDto>> getAllModels() {
		List<AccountModel> models = primaryService.getAllModels();
		List<ResDto> dtos = models.stream().map(model -> Mapper.toResDto(model)).collect(Collectors.toList());
		return ResponseEntity.ok(dtos);
	}

	@GetMapping("/{id}")
	public ResponseEntity<ResDto> getModelById(@PathVariable Long id) {
		Optional<AccountModel> modelOptional = primaryService.getModelById(id);
		return modelOptional.map(model -> ResponseEntity.ok(Mapper.toResDto(model)))
				.orElse(ResponseEntity.notFound().build());
	}

	@PostMapping
	public ResponseEntity<ResDto> createModel(@RequestBody ReqDto reqDto) {
		Optional<pack.card.CardModel> secondaryModel = secondaryService.getCardById(reqDto.getCardId());
		if (secondaryModel.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
		
		Optional<pack.cart.CartModel> tertiaryModel = tertiaryService.getCartById(reqDto.getCartId());
		if (tertiaryModel.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}

		AccountModel primaryModel = Mapper.toEntity(reqDto, secondaryModel.get(), tertiaryModel.get());
		AccountModel createdModel = primaryService.createModel(primaryModel);
		return ResponseEntity.status(HttpStatus.CREATED).body(Mapper.toResDto(createdModel));
	}
	
	@PostMapping("/credentials/{username}/{password}")
	public AccountModel getAccountWithCredentials(
	        @PathVariable String username,
	        @PathVariable String password) {
	    return primaryService.getAccountWithCredentials(username, password).orElse(null);
	}

	@PutMapping("/{id}")
	public ResponseEntity<ResDto> updateModel(@PathVariable Long id, @RequestBody ReqDto reqDto) {
		Optional<pack.card.CardModel> secondaryModel = secondaryService.getCardById(reqDto.getCardId());
		if (secondaryModel.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}
		
		Optional<pack.cart.CartModel> tertiaryModel = tertiaryService.getCartById(reqDto.getCartId());
		if (tertiaryModel.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}

		AccountModel primaryModel = Mapper.toEntity(reqDto, secondaryModel.get(), tertiaryModel.get());
		
		try {
			AccountModel updatedModel = primaryService.updateModel(id, primaryModel);
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
