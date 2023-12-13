package nosql.zkh.backend.controllers;

import nosql.zkh.backend.dto.*;
import nosql.zkh.backend.model.Activity;
import nosql.zkh.backend.model.User;
import nosql.zkh.backend.model.Worker;
import nosql.zkh.backend.services.ActivityService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
public class ActivityController {

    private final ActivityService activityService;

    private final ModelMapper modelMapper;

    public ActivityController(ActivityService activityService,
                              ModelMapper modelMapper) {
        this.activityService = activityService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/activity")
    public List<ActivityDto> getAll(){
        return activityService.getAll().stream().map(this::convertToActivityDto).collect(Collectors.toList());
    }

    @PostMapping("/activity")
    public ActivityDto create(@RequestParam("manager_id") Long manager_id,@RequestBody NewActivityDto newActivityDto){
        return convertToActivityDto(activityService.createActivity(convertToActivity(newActivityDto), manager_id));
    }

    @GetMapping("/worker/{id}/activity")
    public List<ActivityDto> getAllAppealByWorker(@PathVariable("id") Long id){
        return activityService.getActivityByWorker(id).stream().map(this::convertToActivityDto).collect(Collectors.toList());
    }

    @PutMapping("/activity/{id}")
    public ActivityDto addWorkerOnActivity(@PathVariable("id") Long activity_id, @RequestParam("worker_id") Long worker_id){
        return convertToActivityDto(activityService.addWorkerOnActivity(activity_id, worker_id));
    }

    @PutMapping("/activity/{activity_id}/status")
    public ActivityDto updateStatus(@PathVariable("activity_id") Long activity_id, @RequestBody StatusDto statusDto){
        return convertToActivityDto(activityService.updateStatus(activity_id, statusDto.getStatus()));
    }

    @DeleteMapping("/activity/{activity_id}/worker/{worker_id}")
    public ActivityDto deleteWorkerFromAppeal(@PathVariable("activity_id") Long activity_id, @PathVariable("worker_id") Long worker_id){
        return convertToActivityDto(activityService.deleteWorker(activity_id, worker_id));
    }
    private ActivityDto convertToActivityDto(Activity activity){
        ActivityDto activityDto = modelMapper.map(activity, ActivityDto.class);
        activityDto.setGeotag(new GeotagDto(activity.getLatitude(), activity.getLongitude()));
        activityDto.setManager(new ManagerDto(activity.manager.getId(), activity.manager.getName()));
        activityDto.setWorkers(activity.workerList.stream().map(this::convertToUserDto).collect(Collectors.toList()));
        return activityDto;
    }
    private Activity convertToActivity(NewActivityDto newActivityDto){
        Activity activity = modelMapper.map(newActivityDto, Activity.class);
        activity.setLatitude(newActivityDto.getGeotag().getLatitude());
        activity.setLongitude(newActivityDto.getGeotag().getLongitude());
        return activity;
    }
    private UserDto convertToUserDto(User user) {
        return modelMapper.map(user, UserDto.class);
    }

}
