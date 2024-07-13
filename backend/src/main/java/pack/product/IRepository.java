package pack.product;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("productRepository")
public interface IRepository extends JpaRepository<ProductModel, Long> {

}