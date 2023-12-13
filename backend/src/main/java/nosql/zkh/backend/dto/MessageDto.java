package nosql.zkh.backend.dto;

import java.time.LocalDateTime;

public class MessageDto {
    private String message;

    private LocalDateTime date;

    private UserDto owner;

    public MessageDto() {
    }

    public MessageDto(String message, LocalDateTime date, UserDto owner) {
        this.message = message;
        this.date = date;
        this.owner = owner;
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

    public UserDto getOwner() {
        return owner;
    }

    public void setOwner(UserDto owner) {
        this.owner = owner;
    }
}
