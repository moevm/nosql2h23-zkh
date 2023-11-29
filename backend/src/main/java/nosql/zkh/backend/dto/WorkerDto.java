package nosql.zkh.backend.dto;

public class WorkerDto {
    private Long id;

    private String name;

    public WorkerDto(Long id, String name) {
        this.id = id;
        this.name = name;
    }

    public WorkerDto(){
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
