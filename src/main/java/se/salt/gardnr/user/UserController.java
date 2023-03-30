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
        User user = service.getUserById(id);
       // UserPlant up = service.getUserPlantByUserId(id);
        Map<String, Object> json = new HashMap<>();
        json.put("userId", user.getUserId());
        json.put("name", user.getUserName());
        json.put("email", user.getUserEmail());
        //json.put("start date", up.getStartDate());
        //json.put("user plant name", up.getUserPlantName());
        System.out.println("user userplants:");
        //user.getUserPlants().stream().forEach(s -> System.out.println(s.userPlantId));
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
        //return service.createNewUserPlant(id, plant);

        UserPlant newUserPlant = service.createNewUserPlant(id, plant);
        System.out.println("newUSerID;: " + newUserPlant.getUserPlantId());
        URI location = URI.create(("/api/users/" + newUserPlant.getUserPlantId() + "/plants"));
        System.out.println("location: " +location);
        return ResponseEntity.created(location).body(newUserPlant);
    }

    @DeleteMapping("{userId}/{userPlantId}")
    ResponseEntity deleteUserPlants(@PathVariable int userId, @PathVariable int userPlantId)  {
        service.deleteUserPlant(userPlantId);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("{userId}/{userPlantId}")
    public ResponseEntity<UserPlant> updateUserPlantData(@PathVariable int userPlantId, @RequestBody UserPlant userPlant){
        UserPlant upToUdate =  service.updateUserPlant(userPlantId, userPlant);
        return ResponseEntity.accepted().body(upToUdate);
    }
}
