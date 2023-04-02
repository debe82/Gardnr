package se.salt.gardnr.login;

import jakarta.validation.Valid;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/login")
@CrossOrigin(origins = "http://localhost:3000")
public class LoginController {

  @PostMapping
  public ResponseEntity<LoginResponseDto> performLogin(@Valid @RequestBody LoginRequestDTO loginRequestDTO){
    return ResponseEntity.ok(new LoginResponseDto("Success !"));
  }
}