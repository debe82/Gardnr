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

    @PostMapping("{id}/plants")
    public ResponseEntity<UserPlant> addProductToCart(@PathVariable int id, @RequestBody Plant plant
    ) throws NotFoundException {
        //return service.createNewUserPlant(id, plant);

        UserPlant newUserPlant = service.createNewUserPlant(id, plant);
        System.out.println("newUSerID;: " + newUserPlant.getUserPlantId());
//        User user = service.addPlantToUser(id,upDTO);
//        UserDto userDTO = service.convertToUserDto(user);
        //URI location = URI.create(req.getRequestURL() + "/" + newUserPlant.getUserPlantId());
        // //return ResponseEntity.created(location).body(newUserPlant);
        URI location = URI.create(("/api/users/" + newUserPlant.getUserPlantId() + "/plants"));
        return ResponseEntity.created(location).body(newUserPlant);
    }

//    @GetMapping("{authid}")
//    ResponseEntity<User> getUserById(@PathVariable String authid) {
//        User user = service.getUserByAuthId(authid);
//        return ResponseEntity.ok().body(user);
//    }

}
