package se.salt.gardnr.user;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.salt.gardnr.userplant.UserPlant;

import java.net.URI;
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

//    @PostMapping("{id}")
//    ResponseEntity<UserPlant> addUserPlant(@PathVariable int id, @RequestBody UserPlant userPlant, HttpServletRequest req){
//        User user = service.getUserById(id);
//        user.userPlants.add(userPlant);
//        URI location = URI.create(req.getRequestURL() + "/" + user.userPlants.indexOf(userPlant));
//        return ResponseEntity.created(location).body(userPlant);
//    }

//    @GetMapping("{authid}")
//    ResponseEntity<User> getUserById(@PathVariable String authid) {
//        User user = service.getUserByAuthId(authid);
//        return ResponseEntity.ok().body(user);
//    }

}
