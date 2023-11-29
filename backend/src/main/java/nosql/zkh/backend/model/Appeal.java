package nosql.zkh.backend.model;

import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Relationship;

import java.time.LocalDateTime;
import java.util.List;

public class Appeal {
    @Id
    @GeneratedValue
    private final Long id;

    private String name;
    private String description;

    private String status;

    private String feedback;

    private String address;

    private Float longitude;

    private Float latitude;

    private String type;

    private LocalDateTime createdAt;

    @Relationship(type = "Controls", direction = Relationship.Direction.INCOMING)
    public Manager manager;

    @Relationship(type = "Creates", direction = Relationship.Direction.INCOMING)
    public Tenant tenant;

    @Relationship(type = "WorksOn", direction = Relationship.Direction.INCOMING)
    public List<Worker> workerList;

    public Appeal(Long id, String name, String description, String status, String feedback, String address, Float longitude, Float latitude, String type, LocalDateTime createdAt) {
        this.id = id;
        this.name = name;
        this.description = description;
        this.status = status;
        this.feedback = feedback;
        this.address = address;
        this.longitude = longitude;
        this.latitude = latitude;
        this.type = type;
        this.createdAt = createdAt;
    }

    public Long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
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

    public Float getLongitude() {
        return longitude;
    }

    public void setLongitude(Float longitude) {
        this.longitude = longitude;
    }

    public Float getLatitude() {
        return latitude;
    }

    public void setLatitude(Float latitude) {
        this.latitude = latitude;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
