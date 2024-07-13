package pack.history;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository("historyRepository")
public interface IRepository extends JpaRepository<HistoryModel, Long> {

}
