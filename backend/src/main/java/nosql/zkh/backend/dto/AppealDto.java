package nosql.zkh.backend.dto;

import java.time.LocalDateTime;

public class AppealDto {
    private Long id;
    private String title;

    private LocalDateTime date;

    private ManagerDto manager;

    private String description;

    private String address;

    private GeotagDto geotag;

    public AppealDto(Long id, String title, LocalDateTime date, ManagerDto manager, String description, String address, GeotagDto geotag) {
        this.id = id;
        this.title = title;
        this.date = date;
        this.manager = manager;
        this.description = description;
        this.address = address;
        this.geotag = geotag;
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

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date){
        this.date = date;
    }

    public ManagerDto getManager() {
        return manager;
    }

    public void setManager(ManagerDto manager) {
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
}
