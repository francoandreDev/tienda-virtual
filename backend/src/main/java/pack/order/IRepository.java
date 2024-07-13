package pack.order;

import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository("orderRepository")
public interface IRepository extends JpaRepository<OrderModel, Long> {
	@Query("SELECT o FROM OrderModel o WHERE o.id IN :orderIds")
	Optional<Set<OrderModel>> findOrdersByIds(@Param("orderIds") Set<Long> orderIds);
	
	@Query("SELECT o FROM OrderModel o WHERE o.id = :orderId")
	Optional<OrderModel> findOrderById(@Param("orderId") Long orderId);
}