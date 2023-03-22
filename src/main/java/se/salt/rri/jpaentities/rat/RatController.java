package se.salt.rri.jpaentities.rat;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.salt.rri.jpaentities.city.AddCityDto;
import se.salt.rri.jpaentities.city.City;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/rats")
public class RatController {
  @Autowired
  RatService service;

  @CrossOrigin(origins = "http://localhost:3000")
  @GetMapping
  ResponseEntity<List<RescuedRat>> getAllRats(){
    List<RescuedRat> listOfRats = service.getAllRats();
    return ResponseEntity.ok().body(listOfRats);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @GetMapping("{id}")
  ResponseEntity<RescuedRat> getRats(@PathVariable Long id){
    if (id < 1) return ResponseEntity.badRequest().build();
    if (service.getRescuedRatById(id) == null) return ResponseEntity.notFound().build();

    return ResponseEntity.ok(service.getRescuedRatById(id));
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @PostMapping
  ResponseEntity<RescuedRat> addRescuedRat(@RequestBody RescuedRat rat, HttpServletRequest req){

    service.addRescuedRat(rat);
    URI location = URI.create(req.getRequestURL() + "/" + rat.getId());
    System.out.println("location");
    return ResponseEntity.created(location).body(rat);
  }

  @CrossOrigin(origins = "http://localhost:3000")
  @PatchMapping(path="{id}")
  ResponseEntity<RescuedRat> updateRescuedRat(@PathVariable Long id, @RequestBody RescuedRat rat){
    if (id < 1) return ResponseEntity.badRequest().build();
    RescuedRat updatedRat = service.updateRat(id, rat);
    if (updatedRat == null) return ResponseEntity.notFound().build();

    return ResponseEntity.accepted().body(updatedRat);
  }



  @CrossOrigin(origins = "http://localhost:3000")
  @DeleteMapping("{id}")
  ResponseEntity deleteRescuedRat(@PathVariable Long id){
    if(id < 1) return ResponseEntity.badRequest().build();
    RescuedRat rat = service.getRescuedRatById(id);
    if(rat == null) return ResponseEntity.notFound().build();
    service.deleteRescuedRat(id);
    return ResponseEntity.noContent().build();
  }



}
