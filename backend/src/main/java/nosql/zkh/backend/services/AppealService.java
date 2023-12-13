package nosql.zkh.backend.services;

import nosql.zkh.backend.model.Appeal;
import nosql.zkh.backend.model.Message;
import nosql.zkh.backend.repositories.*;
import org.springframework.data.neo4j.core.DatabaseSelectionProvider;
import org.springframework.data.neo4j.core.Neo4jClient;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@Service
public class AppealService {
    private final AppealRepository appealRepository;

    private final ManagerRepository managerRepository;

    private final MessageRepository messageRepository;

    private final WorkerRepository workerRepository;

    private final TenantRepository tenantRepository;
    private final Neo4jClient neo4jClient;
    private final DatabaseSelectionProvider databaseSelectionProvider;

    public AppealService(AppealRepository appealRepository, ManagerRepository managerRepository, MessageRepository messageRepository, WorkerRepository workerRepository, TenantRepository tenantRepository, Neo4jClient neo4jClient, DatabaseSelectionProvider databaseSelectionProvider) {
        this.appealRepository = appealRepository;
        this.managerRepository = managerRepository;
        this.messageRepository = messageRepository;
        this.workerRepository = workerRepository;
        this.tenantRepository = tenantRepository;
        this.neo4jClient = neo4jClient;
        this.databaseSelectionProvider = databaseSelectionProvider;
    }
    public List<Appeal> getNewAppeal(){
        return appealRepository.findByStatus("Новое обращение");
    }

    public List<Appeal> getAllAppeal(){
        return appealRepository.findAll();
    }


    public Appeal addManageronAppeal(Long id_appeal, Long id_manager){
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

    public Appeal createAppeal(Appeal appeal, Long tenant_id){
        appeal.setStatus("Новое обращение");
        appeal.setFeedback("");
        appeal = appealRepository.save(appeal);
        appeal.tenant = tenantRepository.findById(tenant_id);
        //заглушка TODO
        appeal.setAddress(appeal.tenant.getAddress());
        appeal.setLatitude(appeal.tenant.getLatitude());
        appeal.setLongitude(appeal.tenant.getLongitude());
        return appealRepository.save(appeal);
    }
    private String database() {
        return databaseSelectionProvider.getDatabaseSelection().getValue();
    }

    public List<Appeal> getAppealByManager(Long id){
        return managerRepository.findById(id).controlsAppeals.stream().toList();
    }

    public Message sendMessageManager(Message message, Long appeal_id, Long manager_id){
        message.manager = managerRepository.findById(manager_id);
        message.appeal = appealRepository.findById(appeal_id);
        return messageRepository.save(message);
    }

    public Message sendMessageTenant(Message message, Long appeal_id, Long tenant_id){
        message.tenant = tenantRepository.findById(tenant_id);
        message.appeal = appealRepository.findById(appeal_id);
        return messageRepository.save(message);
    }

    public Appeal addWorkerOnAppeal(Long appeal_id, Long worker_id){
        Appeal appeal = appealRepository.findById(appeal_id);
        if(appeal.workerList == null)
            appeal.workerList = new LinkedList<>();
        appeal.workerList.add(workerRepository.findById(worker_id));
        return appealRepository.save(appeal);
    }
    public List<Appeal> getAppealByWorker(Long id){
        return workerRepository.findById(id).workAppeals.stream().toList();
    }
    public Appeal updateStatus(Long appeal_id, String status){
        Appeal appeal = appealRepository.findById(appeal_id);
        appeal.setStatus(status);
        return appealRepository.save(appeal);
    }

    public Appeal addFeedback(Long appeal_id, String feedback){
        Appeal appeal = appealRepository.findById(appeal_id);
        appeal.setFeedback(feedback);
        return appealRepository.save(appeal);
    }

    public Appeal deleteWorker(Long appeal_id, Long worker_id){
        neo4jClient.query("MATCH (a:Worker)-[r: WorksOn]->(b:Appeal) " +
                        "WHERE Id(a) = $worker_id AND Id(b) = $appeal_id" +
                        " Delete r ")
                .in( database() )
                .bindAll(Map.of("worker_id", worker_id,"appeal_id",appeal_id ))
                .run();
        return appealRepository.findById(appeal_id);
    }

    public List<Appeal> getAppealByTenant(Long id){
        return tenantRepository.findById(id).createsAppeals.stream().toList();
    }
}
