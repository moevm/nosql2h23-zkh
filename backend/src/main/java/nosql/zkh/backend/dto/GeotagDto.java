package nosql.zkh.backend.dto;

public class GeotagDto {
    private Float latitude;
    private Float longitude;

    public GeotagDto(Float latitude, Float longitude) {
        this.latitude = latitude;
        this.longitude = longitude;
    }

    public GeotagDto() {
    }

    public Float getLatitude() {
        return latitude;
    }

    public void setLatitude(Float latitude) {
        this.latitude = latitude;
    }

    public Float getLongitude() {
        return longitude;
    }

    public void setLongitude(Float longitude) {
        this.longitude = longitude;
    }
}
