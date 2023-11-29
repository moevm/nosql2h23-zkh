package nosql.zkh.backend.repositories;

import nosql.zkh.backend.model.Manager;
import org.springframework.data.repository.Repository;

public interface ManagerRepository extends Repository<Manager, Long> {
    Manager findByLoginAndPassword(String login, String password);

    Manager findById(Long id);
    Manager save(Manager manager);

    Manager findAllById(Long id);
}
