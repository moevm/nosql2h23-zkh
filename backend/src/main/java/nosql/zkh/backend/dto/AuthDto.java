package nosql.zkh.backend.dto;

public class AuthDto {
    private Long id;
    private String role;

    private String phoneNumber;

    private String name;

    public AuthDto(Long id, String role, String phoneNumber, String name) {
        this.id = id;
        this.role = role;
        this.phoneNumber = phoneNumber;
        this.name = name;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getRole() {
        return role;
    }

    public void setRole(String role) {
        this.role = role;
    }

    public String getPhoneNumber() {
        return phoneNumber;
    }

    public void setPhoneNumber(String phoneNumber) {
        this.phoneNumber = phoneNumber;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }
}
