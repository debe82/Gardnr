package se.salt.gardnr.plant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/plants")
public class PlantController {

    @Autowired
    PlantService service;
    @GetMapping
    public ResponseEntity<String> get() {
    return new ResponseEntity<>("Hej", HttpStatus.OK);
}
}
