package nosql.zkh.backend.controllers;

import nosql.zkh.backend.dto.*;
import nosql.zkh.backend.model.Activity;
import nosql.zkh.backend.model.Appeal;
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
    @PutMapping("/appeal/{id_appeal}")
    public AppealDto setManagerOnAppeal(@PathVariable("id_appeal") Long id_appeal, @RequestParam("manager_id") Long manager_id){
        return convertToAppealDto(appealService.set(id_appeal, manager_id));
    }
    @GetMapping("/manager/{id}/appeal")
    public List<AppealDto> getAll(@PathVariable("id") Long id){
        return appealService.getAppealByManager(id).stream().map(this::convertToAppealDto).collect(Collectors.toList());
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
    
    private AppealDto convertToAppealDto(Appeal appeal){
        AppealDto appealDto = modelMapper.map(appeal, AppealDto.class);
        appealDto.setGeotag(new GeotagDto(appeal.getLatitude(), appeal.getLongitude()));
        if(appeal.manager != null)
            appealDto.setManager(new ManagerDto(appeal.manager.getId(), appeal.manager.getName()));
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
}
