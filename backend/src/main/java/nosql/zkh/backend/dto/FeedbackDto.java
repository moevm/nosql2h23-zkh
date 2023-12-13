package nosql.zkh.backend.dto;

public class FeedbackDto {
    private String feedback;

    public FeedbackDto(String feedback) {
        this.feedback = feedback;
    }

    public FeedbackDto() {
    }

    public String getFeedback() {
        return feedback;
    }

    public void setFeedback(String feedback) {
        this.feedback = feedback;
    }
}
