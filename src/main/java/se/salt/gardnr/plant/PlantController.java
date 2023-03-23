package se.salt.gardnr.plant;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/plants")
public class PlantController {

    @Autowired
    PlantService service;
    @GetMapping
    public ResponseEntity<List<Plant>> getAllPlants() {
        List<Plant> listOfPlants = service.getAllPlant();

        return ResponseEntity.ok(listOfPlants);
    }

    @GetMapping("{id}")
    public  ResponseEntity<Plant> getPlantById(@PathVariable int id){

        if (id < 1) return ResponseEntity.badRequest().build();
        Plant plant = service.getPlantById(id);
        if (plant == null) return ResponseEntity.notFound().build();

        return ResponseEntity.ok(plant);
    }

    @PostMapping
    ResponseEntity<Plant> addPlantToUserPlants(@RequestBody Plant plant, HttpServletRequest req){

        Plant newPlant = service.addNewPlant(plant);
        if (newPlant == null) return ResponseEntity.unprocessableEntity().build();
        URI location = URI.create(req.getRequestURL() +"/" +plant.getPlantId());

        return ResponseEntity.created(location).body(newPlant);
    }

    @PatchMapping("{id}")
    ResponseEntity<Plant> updatePLantDetails(@PathVariable int id, @RequestBody Plant plant){
        if (id < 1) return ResponseEntity.badRequest().build();
        Plant updatedPlant = service.updatePlant(id, plant);
        if (updatedPlant == null) return ResponseEntity.unprocessableEntity().build();

        return ResponseEntity.accepted().body(updatedPlant);
    }


    @DeleteMapping("{id}")
    ResponseEntity deletePlantFor(@PathVariable int id) {
        if (id < 1) return ResponseEntity.badRequest().build();
        Plant plantToDelete = service.getPlantById(id);
        if (plantToDelete == null) return ResponseEntity.unprocessableEntity().build();
        service.deletePlant(id);
        return ResponseEntity.noContent().build();
    }


}
