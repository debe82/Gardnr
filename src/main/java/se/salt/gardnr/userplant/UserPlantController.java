package se.salt.gardnr.userplant;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.salt.gardnr.NotFoundException;
import java.util.HashMap;
import java.util.Map;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/userplants")
public class UserPlantController {
    @Autowired
    UserPlantService service;

    @GetMapping("{id}")
    ResponseEntity<UserPlant> getPlantById(@PathVariable int id) throws NotFoundException {
        if (id < 0) return ResponseEntity.badRequest().build();
        UserPlant userPlant = service.getUserPlantById(id);
        if (userPlant == null) return ResponseEntity.notFound().build();
        return ResponseEntity.ok(userPlant);
    }

    @ExceptionHandler({ NotFoundException.class })
    public ResponseEntity notFound(Exception nfe) {
        Map<String, Object> json = new HashMap<>();
        json.put("message", nfe.getMessage());
        return new ResponseEntity(json, HttpStatus.NOT_FOUND);
    }
}
