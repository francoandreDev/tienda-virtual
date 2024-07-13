package pack.user;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("userRepository")
public interface IRepository extends JpaRepository<UserModel, Long> {

}
