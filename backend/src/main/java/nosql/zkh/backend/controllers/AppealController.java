package nosql.zkh.backend.controllers;

import nosql.zkh.backend.dto.*;
import nosql.zkh.backend.model.Activity;
import nosql.zkh.backend.model.Appeal;
import nosql.zkh.backend.model.User;
import nosql.zkh.backend.model.Message;
import nosql.zkh.backend.services.ActivityService;
import nosql.zkh.backend.services.AppealService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
public class AppealController {
    private final AppealService appealService;

    private final ModelMapper modelMapper;

    public AppealController(AppealService appealService, ModelMapper modelMapper) {
        this.appealService = appealService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/appeal/new")
    public List<AppealDto> getAllNew(){
        return appealService.getNewAppeal().stream().map(this::convertToAppealDto).collect(Collectors.toList());
    }

    @GetMapping("/appeal")
    public List<AppealDto> getAll(){
        return appealService.getAllAppeal().stream().map(this::convertToAppealDto).collect(Collectors.toList());
    }

    @PutMapping("/appeal/{appeal_id}")
    public AppealDto setManagerOnAppeal(@PathVariable("appeal_id") Long id_appeal, @RequestParam(value = "manager_id", required = false) Long manager_id, @RequestParam(value = "worker_id", required = false) Long worker_id){
        if(manager_id != null)
            return convertToAppealDto(appealService.addManageronAppeal(id_appeal, manager_id));
        else
            return convertToAppealDto(appealService.addWorkerOnAppeal(id_appeal, worker_id));
    }
    @GetMapping("/manager/{id}/appeal")
    public List<AppealDto> getAllAppealByManager(@PathVariable("id") Long id){
        return appealService.getAppealByManager(id).stream().map(this::convertToAppealDto).collect(Collectors.toList());
    }
    @GetMapping("/worker/{id}/appeal")
    public List<AppealDto> getAllAppealByWorker(@PathVariable("id") Long id){
        return appealService.getAppealByWorker(id).stream().map(this::convertToAppealDto).collect(Collectors.toList());
    }
    @PostMapping("/appeal")
    public AppealDto createAppeal(@RequestParam("tenant_id") Long tenant_id, @RequestBody NewAppealDto newAppealDto){
        return convertToAppealDto(appealService.createAppeal(convertToAppeal(newAppealDto), tenant_id));
    }

    @PostMapping("/appeal/{appeal_id}/manager/{manager_id}/msg")
    public MessageDto sendMessageManager(@PathVariable("appeal_id") Long appeal_id, @PathVariable("manager_id") Long manager_id, @RequestBody MessageDto messageDto){
        return convertToMessageDto(appealService.sendMessageManager(convertToMessage(messageDto), appeal_id, manager_id));
    }

    @PostMapping("/appeal/{appeal_id}/tenant/{tenant_id}/msg")
    public MessageDto sendMessageTenant(@PathVariable("appeal_id") Long appeal_id, @PathVariable("tenant_id") Long tenant_id, @RequestBody MessageDto messageDto){
        return convertToMessageDto(appealService.sendMessageTenant(convertToMessage(messageDto), appeal_id, tenant_id));
    }

    @PutMapping("/appeal/{appeal_id}/status")
    public AppealDto updateStatus(@PathVariable("appeal_id") Long appeal_id, @RequestBody StatusDto statusDto){
        return convertToAppealDto(appealService.updateStatus(appeal_id, statusDto.getStatus()));
    }

    @PutMapping("/appeal/{appeal_id}/feedback")
    public AppealDto addFeedback(@PathVariable("appeal_id") Long appeal_id, @RequestBody FeedbackDto feedbackDto){
        return convertToAppealDto(appealService.addFeedback(appeal_id, feedbackDto.getFeedback()));
    }

    @DeleteMapping("/appeal/{appeal_id}/worker/{worker_id}")
    public AppealDto deleteWorkerFromAppeal(@PathVariable("appeal_id") Long appeal_id, @PathVariable("worker_id") Long worker_id){
        return convertToAppealDto(appealService.deleteWorker(appeal_id, worker_id));
    }

    private AppealDto convertToAppealDto(Appeal appeal){
        AppealDto appealDto = modelMapper.map(appeal, AppealDto.class);
        appealDto.setGeotag(new GeotagDto(appeal.getLatitude(), appeal.getLongitude()));
        if(appeal.manager != null)
            appealDto.setManager(convertToUserDto(appeal.manager));
        if(appeal.tenant != null)
            appealDto.setTenant(convertToUserDto(appeal.tenant));
        appealDto.setWorkers(appeal.workerList.stream().map(this::convertToUserDto).collect(Collectors.toList()));
        appealDto.setMessages(appeal.messageList.stream().map(this::convertToMessageDto).collect(Collectors.toList()));
        return appealDto;
    }
    private Appeal convertToAppeal(NewAppealDto newAppealDto){
        Appeal appeal = modelMapper.map(newAppealDto, Appeal.class);
        appeal.setLatitude(newAppealDto.getGeotag().getLatitude());
        appeal.setLongitude(newAppealDto.getGeotag().getLongitude());
        return appeal;
    }
    private Message convertToMessage(MessageDto messageDto){
        return modelMapper.map(messageDto, Message.class);
    }
    private MessageDto convertToMessageDto(Message message){
        MessageDto messageDto = modelMapper.map(message, MessageDto.class);
        if(message.manager != null){
            messageDto.setOwner(new UserDto(message.manager.getId(), message.manager.getName()));
        }
        else{
            messageDto.setOwner(new UserDto(message.tenant.getId(), message.tenant.getName()));
        }
        return messageDto;
    }
    private UserDto convertToUserDto(User user) {
        return modelMapper.map(user, UserDto.class);
    }
}
