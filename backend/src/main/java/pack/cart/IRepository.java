package pack.cart;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("cartRepository")
public interface IRepository extends JpaRepository<CartModel, Long> {
	
}
