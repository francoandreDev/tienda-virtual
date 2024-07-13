package pack.category;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface IService {
	public List<CategoryModel> getAllModels();
	public Optional<CategoryModel> getModelById(Long id);
	public CategoryModel createModel(CategoryModel model);
	public CategoryModel updateModel(Long id, CategoryModel updatedModel);
	public void deleteModel(Long id);
	
	public Optional<Set<pack.product.ProductModel>> getProductsById(Set<Long> productIds);
	public Optional<Set<CategoryModel>> getCategoriesById(Set<Long> categoriesId);
}
