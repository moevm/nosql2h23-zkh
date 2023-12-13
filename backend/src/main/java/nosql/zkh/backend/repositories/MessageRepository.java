package nosql.zkh.backend.repositories;


import nosql.zkh.backend.model.Message;
import org.springframework.data.repository.Repository;

public interface MessageRepository  extends Repository<Message, Long> {
    Message save(Message message);
}
