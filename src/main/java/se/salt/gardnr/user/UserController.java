package se.salt.gardnr.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.user.OAuth2User;

import org.springframework.web.bind.annotation.*;
import se.salt.gardnr.plant.NotFoundException;
import se.salt.gardnr.plant.Plant;
import se.salt.gardnr.plant.PlantService;
import se.salt.gardnr.userplant.UserPlant;

import java.net.URI;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000" , allowCredentials = "true")
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService service;

    @Autowired
    PlantService plantService;



    @GetMapping
    public ResponseEntity<?> getUser(@AuthenticationPrincipal OAuth2User userAuth) {
        if (userAuth == null) {
            return new ResponseEntity<>("", HttpStatus.OK);
        } else {
            String authid = userAuth.getAttributes().get("aud").toString();
            User user = service.findUserByAuthId(authid);
            if (user == null) {
                User newuser = service.createNewUser(userAuth);
                System.out.println("this is user in if statement" + newuser);
                return ResponseEntity.ok().body(newuser);
            } else {
                System.out.println("this is the user in the else statement" + user);
                return ResponseEntity.ok().body(user);
            }
        }
    }

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
}
