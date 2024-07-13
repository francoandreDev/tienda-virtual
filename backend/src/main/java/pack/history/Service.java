package pack.history;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import pack.errors.ModelNotFoundException;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service("historyService")
public class Service implements IService {

	@Autowired
	@Qualifier("historyRepository")
	private IRepository repository;

	@Override
	public List<HistoryModel> getAllModels() {
		return repository.findAll();
	}

	@Override
	public Optional<HistoryModel> getModelById(Long id) {
		return repository.findById(id);
	}

	@Override
	public HistoryModel createModel(HistoryModel model) {
		return repository.save(model);
	}

	@Override
	public HistoryModel updateModel(Long id, HistoryModel updatedModel) {
		Optional<HistoryModel> existingModelOptional = repository.findById(id);
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
}

