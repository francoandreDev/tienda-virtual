package pack.pay;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface IService {
	public List<PayModel> getAllModels();
	public Optional<PayModel> getModelById(Long id);
	public PayModel createModel(PayModel model);
	public PayModel updateModel(Long id, PayModel updatedModel);
	public void deleteModel(Long id);
	
	public Optional<Set<PayModel>> getPaysById(Set<Long> paymentsId);
}
