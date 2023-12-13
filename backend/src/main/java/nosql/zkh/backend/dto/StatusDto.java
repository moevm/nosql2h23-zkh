package nosql.zkh.backend.dto;

public class StatusDto {
    private String status;

    public StatusDto(String status) {
        this.status = status;
    }

    public StatusDto() {
    }

    public String getStatus() {
        return status;
    }

    public void setStatus(String status) {
        this.status = status;
    }
}
