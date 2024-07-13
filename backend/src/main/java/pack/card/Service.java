package pack.card;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import pack.errors.ModelNotFoundException;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service("cardService")
public class Service implements IService {

	@Autowired
	@Qualifier("cardRepository")
	private IRepository repository;

	@Override
	public List<CardModel> getAllModels() {
		return repository.findAll();
	}

	@Override
	public Optional<CardModel> getModelById(Long id) {
		return repository.findById(id);
	}

	@Override
	public CardModel createModel(CardModel model) {
		return repository.save(model);
	}

	@Override
	public CardModel updateModel(Long id, CardModel updatedModel) {
		Optional<CardModel> existingModelOptional = repository.findById(id);
		if (existingModelOptional.isPresent()) {
			updatedModel.setId(id);
			return repository.save(updatedModel);
		}
		throw new ModelNotFoundException("Model with ID " + id + " not found");
	}

	@Override
	public void deleteModel(Long id) {
		repository.deleteById(id);
	}

	@Override
	public Optional<CardModel> getCardById(Long cardId) {
		return this.getModelById(cardId);
	}
}

