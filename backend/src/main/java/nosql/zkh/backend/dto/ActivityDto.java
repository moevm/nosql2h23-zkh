package nosql.zkh.backend.dto;

import java.time.LocalDateTime;
import java.util.List;

public class ActivityDto {
    private Long id;
    private String title;

    private String dateStart;

    private String dateEnd;

    private ManagerDto manager;

    private String description;

    private String address;

    private GeotagDto geotag;

    private List<UserDto> workers;

    public ActivityDto(Long id, String title, String dateStart, String dateEnd, ManagerDto manager, String description, String address, GeotagDto geotag, List<UserDto> workers) {
        this.id = id;
        this.title = title;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.manager = manager;
        this.description = description;
        this.address = address;
        this.geotag = geotag;
        this.workers = workers;
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

    public String getDateStart() {
        return dateStart;
    }

    public void setDateStart(String dateStart) {
        this.dateStart = dateStart;
    }

    public String getDateEnd() {
        return dateEnd;
    }

    public void setDateEnd(String dateEnd) {
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

    public List<UserDto> getWorkers() {
        return workers;
    }

    public void setWorkers(List<UserDto> workers) {
        this.workers = workers;
    }
}
