package nosql.zkh.backend.dto;

public class ManagerDto {
    private Long id;
    private String name;

    public ManagerDto(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public ManagerDto() {
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
