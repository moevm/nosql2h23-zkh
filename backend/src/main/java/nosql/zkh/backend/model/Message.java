package nosql.zkh.backend.model;

import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Relationship;

import java.time.LocalDateTime;

public class Message {
    @Id
    @GeneratedValue
    private final Long id;

    private String message;

    private LocalDateTime date;

    @Relationship(value = "BelongsTo")
    public Appeal appeal;

    @Relationship(value = "Sent", type = "INCOMING")
    public Manager manager;

    @Relationship(value = "Sent", type = "INCOMING")
    public Tenant tenant;
    public Message(Long id, String message, LocalDateTime date) {
        this.id = id;
        this.message = message;
        this.date = date;
    }

    public Long getId() {
        return id;
    }

    public String getMessage() {
        return message;
    }

    public void setMessage(String message) {
        this.message = message;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}
