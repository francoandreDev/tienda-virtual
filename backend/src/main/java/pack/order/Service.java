package pack.order;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

import pack.errors.ModelNotFoundException;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@org.springframework.stereotype.Service("orderService")
public class Service implements IService {

	@Autowired
	@Qualifier("orderRepository")
	private IRepository repository;

	@Override
	public List<OrderModel> getAllModels() {
		return repository.findAll();
	}

	@Override
	public Optional<OrderModel> getModelById(Long id) {
		return repository.findById(id);
	}

	@Override
	public OrderModel createModel(OrderModel model) {
		return repository.save(model);
	}

	@Override
	public OrderModel updateModel(Long id, OrderModel updatedModel) {
		Optional<OrderModel> existingModelOptional = repository.findById(id);
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
	public Optional<Set<OrderModel>> getOrdersById(Set<Long> ordersId) {
		return repository.findOrdersByIds(ordersId);
	}

	@Override
	public Optional<OrderModel> getOrderById(Long orderId) {
		return repository.findOrderById(orderId);
	}
}

