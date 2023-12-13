package nosql.zkh.backend.repositories;

import nosql.zkh.backend.model.Worker;
import org.springframework.data.repository.Repository;

import java.util.List;

public interface WorkerRepository extends Repository<Worker, Long> {
    Worker findByLoginAndPassword(String login, String password);
    List<Worker> findAll();

    Worker findById(Long id);

    Worker save(Worker worker);
}
