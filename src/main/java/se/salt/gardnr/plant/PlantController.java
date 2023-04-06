package se.salt.gardnr.plant;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;
import se.salt.gardnr.NotFoundException;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

@CrossOrigin(origins = "http://localhost:3000")
@Controller
@RequestMapping("/api/plants")
public class PlantController {
    @Autowired
    PlantService service;

    @GetMapping
    public ResponseEntity<List<Plant>> getAllPlants() {
        List<Plant> listOfPlants = service.getAllPlants();
        return ResponseEntity.ok(listOfPlants);
    }


    @GetMapping("{id}")
    ResponseEntity<Plant> getPlantById(@PathVariable int id) throws NotFoundException {
        if (id < 0) return ResponseEntity.badRequest().build();
        Plant plant = service.getPlantById(id);
        if (plant == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(plant);
    }

    @ExceptionHandler({ NotFoundException.class })
    public ResponseEntity notFound(Exception nfe) {
        Map<String, Object> json = new HashMap<>();
        json.put("message", nfe.getMessage());
        return new ResponseEntity(json, HttpStatus.NOT_FOUND);
    }
}
