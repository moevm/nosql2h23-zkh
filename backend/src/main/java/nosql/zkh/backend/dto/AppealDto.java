package nosql.zkh.backend.dto;

import java.time.LocalDateTime;
import java.util.List;

public class AppealDto {
    private Long id;
    private String title;

    private String status;

    private String date;

    private UserDto manager;

    private String description;

    private String address;

    private String feedback;

    private GeotagDto geotag;

    private List<MessageDto> messages;

    private UserDto tenant;

    private List<UserDto> workers;

    public List<MessageDto> getMessages() {
        return messages;
    }

    public void setMessages(List<MessageDto> messages) {
        this.messages = messages;
    }

    public UserDto getTenant() {
        return tenant;
    }

    public void setTenant(UserDto tenant) {
        this.tenant = tenant;
    }

    public List<UserDto> getWorkers() {
        return workers;
    }

    public void setWorkers(List<UserDto> workersDto) {
        this.workers = workersDto;
    }

    public AppealDto(Long id, String title, String status, String date, UserDto manager, String description, String address, String feedback, GeotagDto geotag, List<MessageDto> messages, UserDto tenant, List<UserDto> workers) {
        this.id = id;
        this.title = title;
        this.status = status;
        this.date = date;
        this.manager = manager;
        this.description = description;
        this.address = address;
        this.feedback = feedback;
        this.geotag = geotag;
        this.messages = messages;
        this.tenant = tenant;
        this.workers = workers;
    }

    public AppealDto() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDate() {
        return date;
    }

    public void setDate(String date){
        this.date = date;
    }

    public UserDto getManager() {
        return manager;
    }

    public void setManager(UserDto manager) {
        this.manager = manager;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public GeotagDto getGeotag() {
        return geotag;
    }

    public void setGeotag(GeotagDto geotag) {
        this.geotag = geotag;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public String getFeedback() {
        return feedback;
    }
    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
