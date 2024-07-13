package pack.category;

import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import pack.product.ProductModel;

@Repository("categoryRepository")
public interface IRepository extends JpaRepository<CategoryModel, Long> {
	@Query("SELECT p FROM ProductModel p WHERE p.id IN :productIds")
    Optional<Set<ProductModel>> findProductsByIds(@Param("productIds") Set<Long> productIds);
	    
    @Query("SELECT c FROM CategoryModel c WHERE c.id IN :categoryIds")
    Optional<Set<CategoryModel>> findByIdIn(@Param("categoryIds") Set<Long> categoryIds);
}
