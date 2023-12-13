package nosql.zkh.backend.services;

import nosql.zkh.backend.dto.SettingDto;
import nosql.zkh.backend.model.Tenant;
import nosql.zkh.backend.repositories.TenantRepository;
import org.springframework.stereotype.Service;

@Service
public class TenantService {
    private final TenantRepository tenantRepository;

    public TenantService(TenantRepository tenantRepository) {
        this.tenantRepository = tenantRepository;
    }

    public Tenant updateSettings(Long id, SettingDto setting){
        Tenant tenant = tenantRepository.findById(id);
        tenant.setName(setting.getName());
        tenant.setPhoneNumber(setting.getPhoneNumber());
        return tenantRepository.save(tenant);
    }

}
