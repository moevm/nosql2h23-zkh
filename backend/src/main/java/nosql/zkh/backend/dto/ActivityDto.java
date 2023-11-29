package nosql.zkh.backend.dto;

import java.time.LocalDateTime;

public class ActivityDto {
    private Long id;
    private String title;

    private LocalDateTime dateStart;

    private LocalDateTime dateEnd;

    private ManagerDto manager;

    private String description;

    private String address;

    private GeotagDto geotag;

    public ActivityDto(Long id, String title, LocalDateTime dateStart, LocalDateTime dateEnd, ManagerDto manager, String description, String address, GeotagDto geotag) {
        this.id = id;
        this.title = title;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.manager = manager;
        this.description = description;
        this.address = address;
        this.geotag = geotag;
    }

    public ActivityDto() {
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

    public LocalDateTime getDateStart() {
        return dateStart;
    }

    public void setDateStart(LocalDateTime dateStart) {
        this.dateStart = dateStart;
    }

    public LocalDateTime getDateEnd() {
        return dateEnd;
    }

    public void setDateEnd(LocalDateTime dateEnd) {
        this.dateEnd = dateEnd;
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
