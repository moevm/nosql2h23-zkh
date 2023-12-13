package nosql.zkh.backend.dto;

import java.time.LocalDateTime;

public class NewAppealDto {

    private String title;

    private String description;

    private String address;

    private GeotagDto geotag;

    private String type;

    private LocalDateTime date;

    public NewAppealDto(String title, String description, String address, GeotagDto geotag, String type, LocalDateTime date) {
        this.title = title;
        this.description = description;
        this.address = address;
        this.geotag = geotag;
        this.type = type;
        this.date = date;
    }

    public NewAppealDto() {}

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public LocalDateTime getDate() {
        return date;
    }

    public void setDate(LocalDateTime date) {
        this.date = date;
    }
}
