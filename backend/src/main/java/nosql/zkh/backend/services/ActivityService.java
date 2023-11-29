package nosql.zkh.backend.services;

import nosql.zkh.backend.model.Activity;
import nosql.zkh.backend.model.Manager;
import nosql.zkh.backend.repositories.ActivityRepository;
import nosql.zkh.backend.repositories.ManagerRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ActivityService {
    private final ActivityRepository activityRepository;
    private final ManagerRepository managerRepository;

    public ActivityService(ActivityRepository activityRepository, ManagerRepository managerRepository) {
        this.activityRepository = activityRepository;
        this.managerRepository = managerRepository;
    }

    public List<Activity> getAll(){
        return activityRepository.findAll();
    }

    public Activity createActivity(Activity activity, Long idManager){
        activity = activityRepository.save(activity);
        activity.manager = managerRepository.findById(idManager);
        return activityRepository.save(activity);
    }
}
