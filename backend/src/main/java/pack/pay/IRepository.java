package pack.pay;

import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository("payRepository")
public interface IRepository extends JpaRepository<PayModel, Long> {
	@Query("SELECT p FROM PayModel p WHERE p.id IN :paymentsIds")
	Optional<Set<pack.pay.PayModel>> getPaysById(@Param("paymentsIds") Set<Long> paymentsId);
}