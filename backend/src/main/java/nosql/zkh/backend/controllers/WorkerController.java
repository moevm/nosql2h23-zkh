package nosql.zkh.backend.controllers;

import nosql.zkh.backend.dto.SettingDto;
import nosql.zkh.backend.dto.WorkerDto;
import nosql.zkh.backend.model.Tenant;
import nosql.zkh.backend.model.Worker;
import nosql.zkh.backend.services.WorkerService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.stream.Collectors;

@RestController
@CrossOrigin
public class WorkerController {
    private final WorkerService workerService;

    private final ModelMapper modelMapper;

    public WorkerController(WorkerService workerService,
                            ModelMapper modelMapper) {
        this.workerService = workerService;
        this.modelMapper = modelMapper;
    }

    @GetMapping("/worker")
    public List<WorkerDto> getWorkers(){
        return workerService.getWorkers().stream().map(this::convert).collect(Collectors.toList());
    }

    @PutMapping("/worker/{id}")
    public SettingDto updateSetting(@PathVariable("id") Long id, @RequestBody SettingDto settingDto){
        return convertToSettingDto(workerService.updateSettings(id, settingDto));
    }

    private WorkerDto convert(Worker worker){
        return modelMapper.map(worker, WorkerDto.class);
    }
    private SettingDto convertToSettingDto(Worker worker){
        return modelMapper.map(worker, SettingDto.class);
    }
}
