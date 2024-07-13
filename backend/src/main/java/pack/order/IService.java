package pack.order;

import java.util.List;
import java.util.Optional;
import java.util.Set;

public interface IService {
	public List<OrderModel> getAllModels();
	public Optional<OrderModel> getModelById(Long id);
	public OrderModel createModel(OrderModel model);
	public OrderModel updateModel(Long id, OrderModel updatedModel);
	public void deleteModel(Long id);
	
	public Optional<Set<OrderModel>> getOrdersById(Set<Long> ordersId);
	public Optional<OrderModel> getOrderById(Long orderId);
}
