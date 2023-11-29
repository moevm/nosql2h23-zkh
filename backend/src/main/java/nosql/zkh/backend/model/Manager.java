package nosql.zkh.backend.model;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;
import java.util.HashSet;

import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Relationship;
import org.springframework.data.neo4j.core.schema.Relationship.Direction;
public class Manager implements User{

    @Id
    @GeneratedValue
    private Long id;

    private String name;

    private String phoneNumber;

    private String login;

    private String password;

    @Relationship(type = "Controls")
    public List<Appeal> controlsAppeals;

    @Relationship(type = "Creates")
    public List<Activity> createsActivity;

    @Relationship(type = "BelongsTo", direction = Direction.INCOMING)
    public List<Message> messageList;
    public Manager(Long id, String name, String phoneNumber, String login, String password) {
        this.id = id;
        this.name = name;
        this.phoneNumber = phoneNumber;
        this.login = login;
        this.password = password;
    }

    public Manager(){

    }
    @Override
    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    @Override
    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
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
        return "manager";
    }
}
