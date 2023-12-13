package nosql.zkh.backend.services;

import nosql.zkh.backend.model.Activity;
import nosql.zkh.backend.model.Appeal;
import nosql.zkh.backend.repositories.ActivityRepository;
import nosql.zkh.backend.repositories.ManagerRepository;
import nosql.zkh.backend.repositories.WorkerRepository;
import org.springframework.stereotype.Service;

import java.util.LinkedList;
import java.util.List;

@Service
public class ActivityService {
    private final ActivityRepository activityRepository;
    private final ManagerRepository managerRepository;

    private final WorkerRepository workerRepository;

    public ActivityService(ActivityRepository activityRepository, ManagerRepository managerRepository, WorkerRepository workerRepository) {
        this.activityRepository = activityRepository;
        this.managerRepository = managerRepository;
        this.workerRepository = workerRepository;
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
}
