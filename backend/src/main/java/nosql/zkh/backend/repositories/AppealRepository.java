package nosql.zkh.backend.repositories;

import nosql.zkh.backend.model.Activity;
import nosql.zkh.backend.model.Appeal;
import org.springframework.data.repository.Repository;
import java.util.List;

public interface AppealRepository extends Repository<Appeal, Long> {
    List<Appeal> findByStatus(String status);
    Appeal findById(Long id);

    Appeal save(Appeal appeal);
}
