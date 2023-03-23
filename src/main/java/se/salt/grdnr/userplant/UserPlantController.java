package se.salt.grdnr.userplant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;


@RestController
@RequestMapping("/api/plants")
public class UserPlantController {
  @Autowired
  UserPlantService service;

  @GetMapping
  ResponseEntity<String> getAllRats(){
    return ResponseEntity.ok().body("hi");
  }




}
