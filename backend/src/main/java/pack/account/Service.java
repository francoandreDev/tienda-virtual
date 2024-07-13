package pack.account;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import pack.errors.ModelNotFoundException;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service("accountService")
public class Service implements IService {
	@Autowired
	@Qualifier("accountRepository")
	private IRepository repository;

	@Override
	public List<AccountModel> getAllModels() {
		return repository.findAll();
	}

	@Override
	public Optional<AccountModel> getModelById(Long id) {
		return repository.findById(id);
	}

	@Override
	public AccountModel createModel(AccountModel model) {
		return repository.save(model);
	}

	@Override
	public AccountModel updateModel(Long id, AccountModel updatedModel) {
		Optional<AccountModel> existingModelOptional = repository.findById(id);
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
    public Optional<AccountModel> getAccountById(Long accountId) {
        return repository.findById(accountId);
    }

	@Override
	public Optional<AccountModel> getAccountWithCredentials(String username, String password) {
		return repository.findByUsernameAndPassword(username, password);
	}
}
