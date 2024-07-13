package pack.cart;

import java.util.List;
import java.util.Optional;

public interface IService {
	public List<CartModel> getAllModels();
	public Optional<CartModel> getModelById(Long id);
	public CartModel createModel(CartModel model);
	public CartModel updateModel(Long id, CartModel updatedModel);
	public void deleteModel(Long id);
	
	public Optional<CartModel> getCartById(Long cartId);
}
