package nosql.zkh.backend.repositories;

import nosql.zkh.backend.model.Worker;
import org.springframework.data.repository.Repository;

public interface WorkerRepository extends Repository<Worker, Long> {
    Worker findByLoginAndPassword(String login, String password);
}
