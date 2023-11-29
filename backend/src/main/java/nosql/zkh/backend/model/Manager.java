package nosql.zkh.backend.model;

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
    private final Long id;

    private String name;

    private String phoneNumber;

    private String login;

    private String password;

    @Relationship(type = "Controls")
    public Set<Appeal> controlsAppeals;

    @Relationship(type = "Creates")
    public Set<Activity> createsActivity;

    @Relationship(type = "BelongsTo", direction = Direction.INCOMING)
    public List<Message> messageList;
    public Manager(Long id, String name, String phoneNumber, String login, String password) {
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

    public void addControlsAppeals(Appeal appeal){
        if (controlsAppeals == null) {
            controlsAppeals = new HashSet<>();
        }
        controlsAppeals.add(appeal);
    }
    @Override
    public String getRole(){
        return "Manager";
    }
}
