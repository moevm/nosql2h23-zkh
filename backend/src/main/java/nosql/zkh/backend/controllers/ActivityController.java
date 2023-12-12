package nosql.zkh.backend.controllers;

import nosql.zkh.backend.dto.*;
import nosql.zkh.backend.model.Activity;
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
    private ActivityDto convertToActivityDto(Activity activity){
        ActivityDto activityDto = modelMapper.map(activity, ActivityDto.class);
        activityDto.setGeotag(new GeotagDto(activity.getLatitude(), activity.getLongitude()));
        activityDto.setManager(new ManagerDto(activity.manager.getId(), activity.manager.getName()));
        return activityDto;
    }
    private Activity convertToActivity(NewActivityDto newActivityDto){
        Activity activity = modelMapper.map(newActivityDto, Activity.class);
        activity.setLatitude(newActivityDto.getGeotag().getLatitude());
        activity.setLongitude(newActivityDto.getGeotag().getLongitude());
        return activity;
    }
}
