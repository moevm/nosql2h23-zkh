package nosql.zkh.backend.services;

import nosql.zkh.backend.model.Activity;
import nosql.zkh.backend.model.Appeal;
import nosql.zkh.backend.repositories.ActivityRepository;
import nosql.zkh.backend.repositories.ManagerRepository;
import nosql.zkh.backend.repositories.WorkerRepository;
import org.springframework.data.neo4j.core.DatabaseSelectionProvider;
import org.springframework.data.neo4j.core.Neo4jClient;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;
import java.util.Map;

@Service
public class ActivityService {
    private final ActivityRepository activityRepository;
    private final ManagerRepository managerRepository;

    private final WorkerRepository workerRepository;

    private final Neo4jClient neo4jClient;

    private final DatabaseSelectionProvider databaseSelectionProvider;
    private String database() {
        return databaseSelectionProvider.getDatabaseSelection().getValue();
    }

    public ActivityService(ActivityRepository activityRepository, ManagerRepository managerRepository, WorkerRepository workerRepository, Neo4jClient neo4jClient, DatabaseSelectionProvider databaseSelectionProvider) {
        this.activityRepository = activityRepository;
        this.managerRepository = managerRepository;
        this.workerRepository = workerRepository;
        this.neo4jClient = neo4jClient;
        this.databaseSelectionProvider = databaseSelectionProvider;
    }

    public List<Activity> getAll(){
        return activityRepository.findAll();
    }

    public Activity createActivity(Activity activity, Long idManager){
        activity = activityRepository.save(activity);
        activity.manager = managerRepository.findById(idManager);
        return activityRepository.save(activity);
    }

    public Activity addWorkerOnActivity(Long activity_id, Long worker_id){
        Activity activity = activityRepository.findById(activity_id);
        if(activity.workerList == null)
            activity.workerList = new LinkedList<>();
        activity.workerList.add(workerRepository.findById(worker_id));
        return activityRepository.save(activity);
    }
    public List<Activity> getActivityByWorker(Long id){
        return workerRepository.findById(id).workActivity.stream().toList();
    }

    public Activity updateStatus(Long activity_id, String status){
        Activity activity = activityRepository.findById(activity_id);
        activity.setStatus(status);
        return activityRepository.save(activity);
    }
    public Activity deleteWorker(Long activity_id, Long worker_id){
        neo4jClient.query("MATCH (a:Worker)-[r: WorksOn]->(b:Activity) " +
                        "WHERE Id(a) = $worker_id AND Id(b) = $activity_id" +
                        " Delete r ")
                .in( database() )
                .bindAll(Map.of("worker_id", worker_id,"activity_id",activity_id ))
                .run();
        return activityRepository.findById(activity_id);
    }
}
