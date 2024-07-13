package pack.category;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import pack.errors.ModelNotFoundException;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@org.springframework.stereotype.Service("categoryService")
public class Service implements IService {
	@Autowired
	@Qualifier("categoryRepository")
	private IRepository repository;

	@Override
	public List<CategoryModel> getAllModels() {
		return repository.findAll();
	}

	@Override
	public Optional<CategoryModel> getModelById(Long id) {
		return repository.findById(id);
	}

	@Override
	public CategoryModel createModel(CategoryModel model) {
		return repository.save(model);
	}

	@Override
	public CategoryModel updateModel(Long id, CategoryModel updatedModel) {
		Optional<CategoryModel> existingModelOptional = repository.findById(id);
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
	public Optional<Set<pack.product.ProductModel>> getProductsById(Set<Long> productIds) {
		return repository.findProductsByIds(productIds);
	}

	@Override
	public Optional<Set<CategoryModel>> getCategoriesById(Set<Long> categoriesId) {
		// TODO Auto-generated method stub
		return repository.findByIdIn(categoriesId);
	}
}

