package pack.product;

import java.util.List;
import java.util.Optional;

public interface IService {
	public List<ProductModel> getAllModels();
	public Optional<ProductModel> getModelById(Long id);
	public ProductModel createModel(ProductModel model);
	public ProductModel updateModel(Long id, ProductModel updatedModel);
	public void deleteModel(Long id);
	
	public Optional<ProductModel> getProductById(Long productId);
}
