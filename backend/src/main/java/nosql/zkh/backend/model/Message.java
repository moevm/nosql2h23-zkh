package nosql.zkh.backend.model;

import org.springframework.data.neo4j.core.schema.GeneratedValue;
import org.springframework.data.neo4j.core.schema.Id;
import org.springframework.data.neo4j.core.schema.Relationship;



public class Message {
    @Id
    @GeneratedValue
    private Long id;

    private String message;

    private String date;

    @Relationship(type = "BelongsTo")
    public Appeal appeal;

    @Relationship(type = "Sent", direction = Relationship.Direction.INCOMING)
    public Manager manager;

    @Relationship(type = "Sent", direction = Relationship.Direction.INCOMING)
    public Tenant tenant;

    public Message(Long id, String message, String date) {
        this.id = id;
        this.message = message;
        this.date = date;
    }

    public Message() {
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }
}
