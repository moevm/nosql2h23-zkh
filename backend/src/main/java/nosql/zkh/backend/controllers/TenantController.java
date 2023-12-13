package nosql.zkh.backend.controllers;


import nosql.zkh.backend.dto.SettingDto;
import nosql.zkh.backend.model.Tenant;
import nosql.zkh.backend.services.TenantService;
import org.modelmapper.ModelMapper;
import org.springframework.web.bind.annotation.*;

@RestController
@CrossOrigin
public class TenantController {
    private final TenantService tenantService;

    private final ModelMapper modelMapper;

    public TenantController(TenantService tenantService, ModelMapper modelMapper) {
        this.tenantService = tenantService;
        this.modelMapper = modelMapper;
    }

    @PutMapping("/tenant/{id}")
    public SettingDto updateSetting(@PathVariable("id") Long id, @RequestBody SettingDto settingDto){
        return convertToSettingDto(tenantService.updateSettings(id, settingDto));
    }

    private SettingDto convertToSettingDto(Tenant tenant){
        return modelMapper.map(tenant, SettingDto.class);
    }
}
