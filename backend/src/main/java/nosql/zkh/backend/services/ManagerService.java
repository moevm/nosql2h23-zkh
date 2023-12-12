package nosql.zkh.backend.services;

import nosql.zkh.backend.model.Appeal;
import nosql.zkh.backend.model.Manager;
import nosql.zkh.backend.repositories.AppealRepository;
import nosql.zkh.backend.repositories.ManagerRepository;
import org.springframework.data.neo4j.core.DatabaseSelectionProvider;
import org.springframework.data.neo4j.core.Neo4jClient;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;

@Service
public class ManagerService {

    private final ManagerRepository managerRepository;

    public ManagerService(ManagerRepository managerRepository) {
        this.managerRepository = managerRepository;
    }

    public List<Manager> getAllManagers(){
        return managerRepository.findAll();
    }


}
