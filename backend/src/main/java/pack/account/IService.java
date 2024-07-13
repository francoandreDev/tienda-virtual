package pack.account;

import java.util.List;
import java.util.Optional;

public interface IService {
	public List<AccountModel> getAllModels();
	public Optional<AccountModel> getModelById(Long id);
	public AccountModel createModel(AccountModel model);
	public AccountModel updateModel(Long id, AccountModel updatedModel);
	public void deleteModel(Long id);
	
	public Optional<AccountModel> getAccountById(Long accountId);
	public Optional<AccountModel> getAccountWithCredentials(String username, String password);
}
