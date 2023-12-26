package nosql.zkh.backend.dto;



public class MessageDto {
    private String message;

    private String date;

    private UserDto owner;

    public MessageDto() {
    }

    public MessageDto(String message, String date, UserDto owner) {
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

    public String getDate() {
        return date;
    }

    public void setDate(String date) {
        this.date = date;
    }

    public UserDto getOwner() {
        return owner;
    }

    public void setOwner(UserDto owner) {
        this.owner = owner;
    }
}
