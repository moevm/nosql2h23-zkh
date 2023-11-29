package nosql.zkh.backend.controllers;

import nosql.zkh.backend.dto.AuthDto;
import nosql.zkh.backend.model.User;
import nosql.zkh.backend.services.AuthService;
import nosql.zkh.backend.utils.UserErrorResponse;
import nosql.zkh.backend.utils.UserNotFoundException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.time.LocalDateTime;

@RestController("/api")
public class AuthController {
    private final AuthService authService;

    public AuthController(AuthService authService) {
        this.authService = authService;
    }
    @GetMapping("/auth")
    public AuthDto auth(@RequestParam("login") String login, @RequestParam("password") String password) {
        return convert(authService.auth(login, password));
    }

    private AuthDto convert(User user){
        return new AuthDto(user.getId(), user.getRole());
    }

    @ExceptionHandler
    private ResponseEntity<UserErrorResponse> handleException(UserNotFoundException exp){
        UserErrorResponse response = new UserErrorResponse(
                "Wrong login or password",
                LocalDateTime.now().toString()
        );
        return new ResponseEntity<>(response, HttpStatus.NOT_FOUND);
    }
}
