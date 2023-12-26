package nosql.zkh.backend.dto;


public class NewActivityDto {
    private String title;

    private String description;

    private String dateStart;

    private String dateEnd;

    private String address;

    private GeotagDto geotag;

    public NewActivityDto(String title, String description, String dateStart, String dateEnd, Long id_manager, String address, GeotagDto geotag) {
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
