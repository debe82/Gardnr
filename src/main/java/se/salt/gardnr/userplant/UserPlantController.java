package se.salt.gardnr.userplant;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/userplants") //previously plants, but maybe it's better to keep that name for the api
public class UserPlantController {

    @Autowired
    UserPlantService service;
    @GetMapping
    public ResponseEntity<List<UserPlant>> getAllPlants() {
        List<UserPlant> listOfUserPlants = service.getAllPlant();

        return ResponseEntity.ok(listOfUserPlants);
    }

    @GetMapping("{id}")
    public  ResponseEntity<UserPlant> getPlantById(@PathVariable int id){

        if (id < 1) return ResponseEntity.badRequest().build();
        UserPlant userPlant = service.getPlantById(id);
        if (userPlant == null) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(userPlant);
    }

    @PostMapping
    ResponseEntity<UserPlant> addPlantToUserPlants(@RequestBody UserPlant userPlant, HttpServletRequest req){

        UserPlant newUserPlant = service.addNewPlant(userPlant);
        if (newUserPlant == null) return ResponseEntity.unprocessableEntity().build();
        URI location = URI.create(req.getRequestURL() +"/" + userPlant.getPlantId());

        return ResponseEntity.created(location).body(newUserPlant);
    }

    @PatchMapping("{id}")
    ResponseEntity<UserPlant> updatePlantDetails(@PathVariable int id, @RequestBody UserPlant userPlant){
        if (id < 1) return ResponseEntity.badRequest().build();
        UserPlant updatedUserPlant = service.updatePlant(id, userPlant);
        if (updatedUserPlant == null) return ResponseEntity.unprocessableEntity().build();

        return ResponseEntity.accepted().body(updatedUserPlant);
    }


    @DeleteMapping("{id}")
    ResponseEntity deletePlantFor(@PathVariable int id) {
        if (id < 1) return ResponseEntity.badRequest().build();
        UserPlant userPlantToDelete = service.getPlantById(id);
        if (userPlantToDelete == null) return ResponseEntity.unprocessableEntity().build();
        service.deletePlant(id);
        return ResponseEntity.noContent().build();
    }


}
