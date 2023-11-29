package nosql.zkh.backend.repositories;

import nosql.zkh.backend.model.Tenant;
import org.springframework.data.repository.Repository;

public interface TenantRepository extends Repository<Tenant, Long> {
    Tenant findByLoginAndPassword(String login, String password);
}
