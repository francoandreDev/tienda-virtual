package pack.cart;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import pack.errors.ModelNotFoundException;

import java.util.List;
import java.util.Optional;

@org.springframework.stereotype.Service("cartService")
public class Service implements IService {

	@Autowired
	@Qualifier("cartRepository")
	private IRepository repository;

	@Override
	public List<CartModel> getAllModels() {
		return repository.findAll();
	}

	@Override
	public Optional<CartModel> getModelById(Long id) {
		return repository.findById(id);
	}

	@Override
	public CartModel createModel(CartModel model) {
		return repository.save(model);
	}

	@Override
	public CartModel updateModel(Long id, CartModel updatedModel) {
		Optional<CartModel> existingModelOptional = repository.findById(id);
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
	public Optional<CartModel> getCartById(Long cartId) {
		return this.getCartById(cartId);
	}
}
