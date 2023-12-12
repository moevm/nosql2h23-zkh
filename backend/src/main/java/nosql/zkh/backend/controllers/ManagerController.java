package nosql.zkh.backend.controllers;

import nosql.zkh.backend.dto.*;
import nosql.zkh.backend.model.Appeal;
import nosql.zkh.backend.model.Manager;
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

    @GetMapping("/manager")
    public List<ManagerDto> getAllManagers(){
        return managerService.getAllManagers().stream().map(this::convertToManagerDto).collect(Collectors.toList());
    }

    private ManagerDto convertToManagerDto(Manager manager){
        return modelMapper.map(manager, ManagerDto.class);
    }

}
