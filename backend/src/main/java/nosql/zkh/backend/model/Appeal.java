package nosql.zkh.backend.model;

import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Relationship;

import java.time.LocalDateTime;
import java.util.List;


public class Appeal {
    @Id
    @GeneratedValue
    private Long id;

    private String title;
    private String description;

    private String status;

    private String feedback;

    private String address;

    private Double longitude;

    private Double latitude;

    private String type;

    private LocalDateTime date;

    @Relationship(type = "Controls", direction = Relationship.Direction.INCOMING)
    public Manager manager;

    @Relationship(type = "Creates", direction = Relationship.Direction.INCOMING)
    public Tenant tenant;

    @Relationship(type = "WorksOn", direction = Relationship.Direction.INCOMING)
    public List<Worker> workerList;

    public Appeal(Long id, String title, String description, String status, String feedback, String address, Double longitude, Double latitude, String type, LocalDateTime date) {
        this.id = id;
        this.title = title;
        this.description = description;
        this.status = status;
        this.feedback = feedback;
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
        this.type = type;
        this.date = date;
    }
    public Appeal(){}
    public Long getId() {
        return id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public Double getLongitude() {
        return longitude;
    }

    public void setLongitude(Double longitude) {
        this.longitude = longitude;
    }

    public Double getLatitude() {
        return latitude;
    }

    public void setLatitude(Double latitude) {
        this.latitude = latitude;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}
