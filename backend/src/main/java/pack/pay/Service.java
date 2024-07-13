package pack.pay;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import pack.errors.ModelNotFoundException;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@org.springframework.stereotype.Service("payService")
public class Service implements IService {
	@Autowired
	@Qualifier("payRepository")
	private IRepository repository;

	@Override
	public List<PayModel> getAllModels() {
		return repository.findAll();
	}

	@Override
	public Optional<PayModel> getModelById(Long id) {
		return repository.findById(id);
	}

	@Override
	public PayModel createModel(PayModel model) {
		return repository.save(model);
	}

	@Override
	public PayModel updateModel(Long id, PayModel updatedModel) {
		Optional<PayModel> existingModelOptional = repository.findById(id);
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
	public Optional<Set<PayModel>> getPaysById(Set<Long> paymentsId) {
		return repository.getPaysById(paymentsId);
	}
}

