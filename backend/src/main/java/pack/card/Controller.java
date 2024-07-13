package pack.card;

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
@RequestMapping("/tarjetas")
@org.springframework.stereotype.Controller("cardController")
public class Controller {

	@Autowired
	@Qualifier("cardService")
	private IService primaryService;

	@Autowired
	@Qualifier("accountService")
	private pack.account.IService secondaryService;

	@GetMapping
	public ResponseEntity<List<ResDto>> getAllModels() {
		List<CardModel> models = primaryService.getAllModels();
		List<ResDto> dtos = models.stream().map(model -> Mapper.toResDto(model)).collect(Collectors.toList());
		return ResponseEntity.ok(dtos);
	}

	@GetMapping("/{id}")
	public ResponseEntity<ResDto> getModelById(@PathVariable Long id) {
		Optional<CardModel> modelOptional = primaryService.getModelById(id);
		return modelOptional.map(model -> ResponseEntity.ok(Mapper.toResDto(model)))
				.orElse(ResponseEntity.notFound().build());
	}

	@PostMapping
	public ResponseEntity<ResDto> createModel(@RequestBody ReqDto reqDto) {
		Optional<pack.account.AccountModel> secondaryModel = secondaryService.getAccountById(reqDto.getAccountId());
		if (secondaryModel.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}

		CardModel primaryModel = Mapper.toEntity(reqDto, secondaryModel.get());
		CardModel createdModel = primaryService.createModel(primaryModel);
		return ResponseEntity.status(HttpStatus.CREATED).body(Mapper.toResDto(createdModel));
	}

	@PutMapping("/{id}")
	public ResponseEntity<ResDto> updateModel(@PathVariable Long id, @RequestBody ReqDto reqDto) {
		Optional<pack.account.AccountModel> secondaryModel = secondaryService.getAccountById(reqDto.getAccountId());
		if (secondaryModel.isEmpty()) {
			return ResponseEntity.status(HttpStatus.BAD_REQUEST).body(null);
		}

		CardModel primaryModel = Mapper.toEntity(reqDto, secondaryModel.get());
		try {
			CardModel updatedModel = primaryService.updateModel(id, primaryModel);
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