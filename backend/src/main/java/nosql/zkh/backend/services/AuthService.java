package nosql.zkh.backend.services;

import nosql.zkh.backend.model.User;
import nosql.zkh.backend.repositories.ManagerRepository;
import nosql.zkh.backend.repositories.TenantRepository;
import nosql.zkh.backend.repositories.WorkerRepository;
import nosql.zkh.backend.utils.UserNotFoundException;
import org.springframework.stereotype.Service;

@Service
public class AuthService {
    private final ManagerRepository managerRepository;

    private final WorkerRepository workerRepository;

    private final TenantRepository tenantRepository;

    public AuthService(ManagerRepository managerRepository,
                       WorkerRepository workerRepository,
                       TenantRepository tenantRepository) {
        this.managerRepository = managerRepository;
        this.workerRepository = workerRepository;
        this.tenantRepository = tenantRepository;
    }

    public User auth(String login, String password){
        User user = managerRepository.findByLoginAndPassword(login, password);
        if(user == null){
            user = workerRepository.findByLoginAndPassword(login, password);
        }
        if(user == null){
            user = tenantRepository.findByLoginAndPassword(login, password);
        }
        if(user == null){
            throw new UserNotFoundException();
        }
        return user;
    }

}
