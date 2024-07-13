package pack.card;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("cardRepository")
public interface IRepository extends JpaRepository<CardModel, Long> {

}