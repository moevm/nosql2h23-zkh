package nosql.zkh.backend.repositories;

import nosql.zkh.backend.model.Activity;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface ActivityRepository extends Repository<Activity, Long> {
    List<Activity> findAll();

    Activity save(Activity activity);
}
