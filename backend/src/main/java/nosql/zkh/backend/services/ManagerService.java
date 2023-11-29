package nosql.zkh.backend.services;

import nosql.zkh.backend.model.Appeal;
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
    private final AppealRepository appealRepository;

    private final Neo4jClient neo4jClient;
    private final DatabaseSelectionProvider databaseSelectionProvider;

    public ManagerService(ManagerRepository managerRepository,
                          AppealRepository appealRepository, Neo4jClient neo4jClient, DatabaseSelectionProvider databaseSelectionProvider) {
        this.managerRepository = managerRepository;
        this.appealRepository = appealRepository;
        this.neo4jClient = neo4jClient;
        this.databaseSelectionProvider = databaseSelectionProvider;
    }

    public List<Appeal> getAppealByManager(Long id){
        return managerRepository.findAllById(id).controlsAppeals.stream().toList();
    }

    public List<Appeal> getNewAppeal(){
        return appealRepository.findByStatus("Новое обращение");
    }

    public Appeal set(Long id_appeal, Long id_manager){
        neo4jClient.query("MATCH (a:Manager), (b:Appeal) " +
                "WHERE Id(a) = $id_manager AND Id(b) = $id_appeal" +
                " CREATE (a)-[: Controls]->(b) " +
                "RETURN a;")
                .in( database() )
                .bindAll(Map.of("id_manager", id_manager,"id_appeal",id_appeal ))
                .run();
        Appeal appeal  = appealRepository.findById(id_appeal);
        appeal.setStatus("В работе");
        return appealRepository.save(appeal);

    }
    private String database() {
        return databaseSelectionProvider.getDatabaseSelection().getValue();
    }

}
