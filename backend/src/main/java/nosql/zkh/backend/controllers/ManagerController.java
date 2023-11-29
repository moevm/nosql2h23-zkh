package nosql.zkh.backend.controllers;

import nosql.zkh.backend.dto.*;
import nosql.zkh.backend.model.Appeal;
import nosql.zkh.backend.services.ManagerService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
public class ManagerController {
    private final ManagerService managerService;

    private final ModelMapper modelMapper;

    public ManagerController(ManagerService managerService,
                              ModelMapper modelMapper) {
        this.managerService = managerService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/manager/{id}/appeal")
    public List<AppealDto> getAll(@PathVariable("id") Long id){
        return managerService.getAppealByManager(id).stream().map(this::convertToAppealDto).collect(Collectors.toList());
    }
    @GetMapping("/appeal/new")
    public List<AppealDto> getAllNew(){
        return managerService.getNewAppeal().stream().map(this::convertToAppealDto).collect(Collectors.toList());
    }
    //put /appeal/{id_appeal}&manager_id=int - привязка менеджера к обращению, верну обращение

    @PutMapping("/appeal/{id_appeal}")
    public AppealDto setMAnagerOnAppeal(@PathVariable("id_appeal") Long id_appeal, @RequestParam("manager_id") Long manager_id){
        return convertToAppealDto(managerService.set(id_appeal, manager_id));
    }
    private AppealDto convertToAppealDto(Appeal appeal){
        AppealDto appealDto = modelMapper.map(appeal, AppealDto.class);
        appealDto.setGeotag(new GeotagDto(appeal.getLatitude(), appeal.getLongitude()));
        if(appeal.manager != null)
            appealDto.setManager(new ManagerDto(appeal.manager.getId(), appeal.manager.getName()));
        return appealDto;
    }

}
