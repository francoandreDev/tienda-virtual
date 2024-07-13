package pack.image;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import pack.errors.ModelNotFoundException;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@org.springframework.stereotype.Service("imageService")
public class Service implements IService {

	@Autowired
	@Qualifier("imageRepository")
	private IRepository repository;

	@Override
	public List<ImageModel> getAllModels() {
		return repository.findAll();
	}

	@Override
	public Optional<ImageModel> getModelById(Long id) {
		return repository.findById(id);
	}

	@Override
	public ImageModel createModel(ImageModel model) {
		return repository.save(model);
	}

	@Override
	public ImageModel updateModel(Long id, ImageModel updatedModel) {
		Optional<ImageModel> existingModelOptional = repository.findById(id);
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
	public Optional<Set<ImageModel>> getImagesById(Set<Long> imagesId) {
		return repository.findByIdIn(imagesId);
	}
}
