package pack.history;

import java.util.List;
import java.util.Optional;

public interface IService {
	public List<HistoryModel> getAllModels();
	public Optional<HistoryModel> getModelById(Long id);
	public HistoryModel createModel(HistoryModel model);
	public HistoryModel updateModel(Long id, HistoryModel updatedModel);
	public void deleteModel(Long id);
}
