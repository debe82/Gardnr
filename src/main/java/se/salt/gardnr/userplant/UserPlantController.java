package se.salt.gardnr.userplant;


import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/userplants")
public class UserPlantController {
    @Autowired
    UserPlantService service;

//    @GetMapping
//    public ResponseEntity<List<UserPlant>> getAllPlants() {
//        List<UserPlant> listOfPlants = service.getAllUserPlants();
//        return ResponseEntity.ok(listOfPlants);
//    }


    @GetMapping("{id}")
    ResponseEntity<UserPlant> getPlantById(@PathVariable int id) throws NotFoundException {
        if (id < 0) return ResponseEntity.badRequest().build();
        UserPlant userPlant = service.getUserPlantById(id);
        if (userPlant == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(userPlant);
    }
//
//    @DeleteMapping("{id}")
//    ResponseEntity deleteUserPlants(@PathVariable int id) throws NotFoundException {
//        if(id < 1) return ResponseEntity.badRequest().build();
//        service.deleteUserPlant(id);
//        return ResponseEntity.noContent().build();
//    }


    @ExceptionHandler({ NotFoundException.class })
    public ResponseEntity notFound(Exception nfe) {
        Map<String, Object> json = new HashMap<>();
        json.put("message", nfe.getMessage());
        return new ResponseEntity(json, HttpStatus.NOT_FOUND);
    }
}
