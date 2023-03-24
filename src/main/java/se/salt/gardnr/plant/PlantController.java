package se.salt.gardnr.plant;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@CrossOrigin
@RequestMapping("/api/plants") //previously plants, but maybe it's better to keep that name for the api
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

}
