package pack.image;

import java.util.Optional;
import java.util.Set;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

@Repository("imageRepository")
public interface IRepository extends JpaRepository<ImageModel, Long> {
	@Query(value = "SELECT * FROM ImageModel i WHERE i.image_id IN :imageIds", nativeQuery = true)
    Optional<Set<ImageModel>> findByIdIn(@Param("imageIds") Set<Long> imageIds);
}
