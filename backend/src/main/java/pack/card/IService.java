package pack.card;

import java.util.List;
import java.util.Optional;

public interface IService {
	public List<CardModel> getAllModels();
	public Optional<CardModel> getModelById(Long id);
	public CardModel createModel(CardModel model);
	public CardModel updateModel(Long id, CardModel updatedModel);
	public void deleteModel(Long id);
	
	public Optional<CardModel> getCardById(Long cardId);
}
