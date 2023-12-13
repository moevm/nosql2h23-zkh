package nosql.zkh.backend.services;

import nosql.zkh.backend.controllers.WorkerController;
import nosql.zkh.backend.dto.SettingDto;
import nosql.zkh.backend.model.Tenant;
import nosql.zkh.backend.model.Worker;
import nosql.zkh.backend.repositories.WorkerRepository;
import org.springframework.data.neo4j.core.Neo4jClient;
import org.springframework.stereotype.Service;

import java.time.Period;
import java.util.List;

@Service
public class WorkerService {
    private final WorkerRepository workerRepository;

    private final Neo4jClient neo4jClient;

    public WorkerService(WorkerRepository workerRepository, Neo4jClient neo4jClient) {
        this.workerRepository = workerRepository;
        this.neo4jClient = neo4jClient;
    }

    public List<Worker> getWorkers(){
        return workerRepository.findAll();
    }

    public Worker updateSettings(Long id, SettingDto setting){
        Worker worker = workerRepository.findById(id);
        worker.setName(setting.getName());
        worker.setPhoneNumber(setting.getPhoneNumber());
        return workerRepository.save(worker);
    }
}
