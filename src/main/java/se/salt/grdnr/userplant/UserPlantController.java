package se.salt.grdnr.userplant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;


@RestController
@RequestMapping("/api/plants")
public class UserPlantController {
  @Autowired
  UserPlantService service;

  @GetMapping
  ResponseEntity<List<UserPlant>> getAllRats(){
    List<UserPlant> listOfPlants = service.getAllPlants();
    return ResponseEntity.ok().body(listOfPlants);
  }




}
