package se.salt.gardnr.user;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.salt.gardnr.model.UserPlantDto;
import se.salt.gardnr.plant.NotFoundException;
import se.salt.gardnr.plant.Plant;
import se.salt.gardnr.plant.PlantService;
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

    @Autowired
    PlantService plantService;

    @GetMapping("{id}")
    ResponseEntity<Map<String, Object>> getUserById(@PathVariable int id) {
        if (id < 0) return ResponseEntity.badRequest().build();
        User user = service.getUserById(id);
        if (user == null) return ResponseEntity.notFound().build();

        Map<String, Object> json = new HashMap<>();
        json.put("userId", user.getUserId());
        json.put("name", user.getUserName());
        json.put("email", user.getUserEmail());
        json.put("listOfUserPlants", user.getUserPlants());
        json.put(
          "plants",
          user.getUserPlants().stream().map(usrPlant -> usrPlant.plant)
        );
        return ResponseEntity.ok(json);
    }

    @CrossOrigin(origins = "http://localhost:3000")
    @PostMapping
    public ResponseEntity<User> saveAndGetUser(@RequestBody User user) {

        User checkeddUser;
        if (user.getUserName() == null) {     //user login
            checkeddUser = service.checkUserCredentials(user);
            if (checkeddUser == null) return new ResponseEntity<>(null, HttpStatus.FORBIDDEN);
            System.out.println("User exist, login granted");
        } else { //user signIn
            checkeddUser = service.addNewUser(user);
            if (checkeddUser == null) return new ResponseEntity<>(null, HttpStatus.NOT_ACCEPTABLE);
            System.out.println("User didn't exist, user cereated");
        }

        //UserDto userDto = new UserDto(user.getUserName()) ;

        return ResponseEntity.ok(checkeddUser);
    }

    @PostMapping("{id}/plants")
    public ResponseEntity<UserPlant> addUserPlant(@PathVariable int id, @RequestBody Plant plant
    ) throws NotFoundException, se.salt.gardnr.userplant.NotFoundException {
        if (id < 0) return ResponseEntity.badRequest().build();
        UserPlant newUserPlant = service.createNewUserPlant(id, plant);
        if (newUserPlant == null) return ResponseEntity.notFound().build();
        URI location = URI.create(("/api/users/" + newUserPlant.getUserPlantId() + "/plants"));
        return ResponseEntity.created(location).body(newUserPlant);
    }

    @DeleteMapping("{userId}/{userPlantId}")
    ResponseEntity deleteUserPlants(@PathVariable int userId, @PathVariable int userPlantId)  {
        if (userId < 0) return ResponseEntity.badRequest().build();
        if (userPlantId < 0) return ResponseEntity.badRequest().build();
        service.deleteUserPlant(userPlantId);

        return ResponseEntity.noContent().build();
    }

    @PutMapping("{userId}/{userPlantId}")
    public ResponseEntity<UserPlant> updateUserPlantData(@PathVariable int userPlantId, @RequestBody UserPlant userPlant){
        if (userPlantId < 0) return ResponseEntity.badRequest().build();
        if (userPlant == null) return ResponseEntity.badRequest().build();
        UserPlant upToUdate =  service.updateUserPlant(userPlantId, userPlant);
        if (upToUdate == null) return ResponseEntity.notFound().build();
        return ResponseEntity.accepted().body(upToUdate);
    }

    @DeleteMapping("{userId}")
    public ResponseEntity deleteUser(@PathVariable int userId){
        User userToDelete = service.getUserById(userId);
        service.deleteUser(userToDelete);
        return ResponseEntity.noContent().build();
    }
}
