package pack.account;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository("accountRepository")
public interface IRepository extends JpaRepository<AccountModel, Long> {
	@Query("SELECT a FROM AccountModel a WHERE a.username = :username AND a.password = :password")
    Optional<AccountModel> findByUsernameAndPassword(@Param("username") String username, @Param("password") String password);
}
