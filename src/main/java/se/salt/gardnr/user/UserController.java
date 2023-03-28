package se.salt.gardnr.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService service;

//    @GetMapping
//    public ResponseEntity<List<User>> getAllUsers() {
//        List<User> listOfPlants = service.getAllUser();
//        return ResponseEntity.ok(listOfPlants);
//    }

    @GetMapping("{id}")
    ResponseEntity<Map<String, Object>> getUserById(@PathVariable int id) {
        User user = service.getUserById(id);
        Map<String, Object> json = new HashMap<>();
        json.put("name", user.getUserName());
        json.put("email", user.getUserEmail());
        json.put(
          "plants",
          user.getUserPlants().stream().map(usrPlant -> usrPlant.plant)
        );
        return ResponseEntity.ok(json);
    }

//    @GetMapping("{authid}")
//    ResponseEntity<User> getUserById(@PathVariable String authid) {
//        User user = service.getUserByAuthId(authid);
//        return ResponseEntity.ok().body(user);
//    }

}
