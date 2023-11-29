package nosql.zkh.backend.model;

import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Relationship;

import java.util.Set;

public class Worker implements User {
    @Id
    @GeneratedValue
    private final Long id;

    private String name;

    private String phoneNumber;

    private String login;

    private String password;

    @Relationship(type = "WorksOn")
    public Set<Appeal> workAppeals;

    @Relationship(type = "WorksOn")
    public Set<Activity> workActivity;
    public Worker(Long id, String name, String phoneNumber, String login, String password) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.login = login;
        this.password = password;
    }

    @Override
    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getLogin() {
        return login;
    }

    public void setLogin(String login) {
        this.login = login;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }

    @Override
    public String getRole(){
        return "Worker";
    }
}
