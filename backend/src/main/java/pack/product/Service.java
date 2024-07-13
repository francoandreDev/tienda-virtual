package pack.product;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import pack.errors.ModelNotFoundException;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service("productService")
public class Service implements IService {

	@Autowired
	@Qualifier("productRepository")
	private IRepository repository;

	@Override
	public List<ProductModel> getAllModels() {
		return repository.findAll();
	}

	@Override
	public Optional<ProductModel> getModelById(Long id) {
		return repository.findById(id);
	}

	@Override
	public ProductModel createModel(ProductModel model) {
		return repository.save(model);
	}

	@Override
	public ProductModel updateModel(Long id, ProductModel updatedModel) {
		Optional<ProductModel> existingModelOptional = repository.findById(id);
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
	public Optional<ProductModel> getProductById(Long productId) {
		return this.getModelById(productId);
	}
}

