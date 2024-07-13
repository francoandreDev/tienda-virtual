package pack.image;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface IService {
	public List<ImageModel> getAllModels();
	public Optional<ImageModel> getModelById(Long id);
	public ImageModel createModel(ImageModel model);
	public ImageModel updateModel(Long id, ImageModel updatedModel);
	public void deleteModel(Long id);
	
	public Optional<Set<ImageModel>> getImagesById(Set<Long> imagesId);
}
