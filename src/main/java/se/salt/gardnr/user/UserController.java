package se.salt.gardnr.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

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
    ResponseEntity<User> getUserById(@PathVariable int id) {
        User user = service.getUserById(id);
        return ResponseEntity.ok(user);
    }

//    @GetMapping("{authid}")
//    ResponseEntity<User> getUserById(@PathVariable String authid) {
//        User user = service.getUserByAuthId(authid);
//        return ResponseEntity.ok().body(user);
//    }

}
