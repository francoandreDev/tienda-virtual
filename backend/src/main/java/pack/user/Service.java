package pack.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import pack.errors.ModelNotFoundException;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service("userService")
public class Service implements IService {

	@Autowired
	@Qualifier("userRepository")
	private IRepository repository;

	@Override
	public List<UserModel> getAllModels() {
		return repository.findAll();
	}

	@Override
	public Optional<UserModel> getModelById(Long id) {
		return repository.findById(id);
	}

	@Override
	public UserModel createModel(UserModel model) {
		return repository.save(model);
	}

	@Override
	public UserModel updateModel(Long id, UserModel updatedModel) {
		Optional<UserModel> existingModelOptional = repository.findById(id);
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

