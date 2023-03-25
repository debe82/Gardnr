package se.salt.gardnr.userplant;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/userplants")
public class UserPlantController {
    @Autowired
    UserPlantService service;

    @GetMapping
    public ResponseEntity<List<UserPlant>> getAllPlants() {
        List<UserPlant> listOfPlants = service.getAllUserPlants();
        return ResponseEntity.ok(listOfPlants);
    }


    @GetMapping("{id}")
    ResponseEntity<UserPlant> getPlantById(@PathVariable int id) throws NotFoundException {
        UserPlant userPlant = service.getUserPlantById(id);
        return ResponseEntity.ok(userPlant);
    }

    @ExceptionHandler({ NotFoundException.class })
    public ResponseEntity notFound(Exception nfe) {
        Map<String, Object> json = new HashMap<>();
        json.put("message", nfe.getMessage());
        return new ResponseEntity(json, HttpStatus.NOT_FOUND);
    }
}
