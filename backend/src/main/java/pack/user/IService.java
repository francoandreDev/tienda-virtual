package pack.user;

import java.util.List;
import java.util.Optional;

public interface IService {
	public List<UserModel> getAllModels();
	public Optional<UserModel> getModelById(Long id);
	public UserModel createModel(UserModel model);
	public UserModel updateModel(Long id, UserModel updatedModel);
	public void deleteModel(Long id);
}
