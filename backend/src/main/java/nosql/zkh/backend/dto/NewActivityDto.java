package nosql.zkh.backend.dto;

import java.time.LocalDateTime;

public class NewActivityDto {
    private String title;

    private String description;

    private LocalDateTime dateStart;

    private LocalDateTime dateEnd;

    private String address;

    private GeotagDto geotag;

    public NewActivityDto(String title, String description, LocalDateTime dateStart, LocalDateTime dateEnd, Long id_manager, String address, GeotagDto geotag) {
        this.title = title;
        this.description = description;
        this.dateStart = dateStart;
        this.dateEnd = dateEnd;
        this.address = address;
        this.geotag = geotag;
    }

    public NewActivityDto() {
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

    public String getAddress() {
        return address;
    }

    public void setAddress(String address) {
        this.address = address;
    }

    public GeotagDto getGeotag() {
        return geotag;
    }

    public void setGeotag(GeotagDto geotag) {
        this.geotag = geotag;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
