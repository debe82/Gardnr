package se.salt.rri.jpaentities.rat;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import se.salt.rri.jpaentities.city.AddCityDto;
import se.salt.rri.jpaentities.city.City;

import java.net.URI;
import java.util.List;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/rats")
public class RatController {
  @Autowired
  RatService service;

  @GetMapping
  ResponseEntity<List<RescuedRat>> getAllRats(){
    List<RescuedRat> listOfRats = service.getAllRats();
    return ResponseEntity.ok().body(listOfRats);
  }

  @GetMapping("{id}")
  ResponseEntity<RescuedRat> getRats(@PathVariable Long id){
    return ResponseEntity.ok(service.getRescuedRatById(id));
  }

  @PostMapping
  ResponseEntity<RescuedRat> addRescuedRat(@RequestBody RescuedRat rat, HttpServletRequest req){

    service.addRescuedRat(rat);
    URI location = URI.create(req.getRequestURL() + "/" + rat.getId());
    System.out.println("location");
    return ResponseEntity.created(location).body(rat);
  }

  @PatchMapping(path="{id}")
  ResponseEntity<RescuedRat> updateRescuedRat(@PathVariable int id){
    return null;
  }
//  @PostMapping("/city")
//  ResponseEntity<City> addCity(@RequestBody AddCityDto cityDto, HttpServletRequest req){
//    City newCity = service.cityRepository.addNewCity(cityDto.cityName());
//
//    URI location = URI.create(req.getRequestURL() + "/" + newCity.getId());
//    System.out.println("location");
//    return ResponseEntity.created(location).body(newCity);
//  }



  @DeleteMapping("{id}")
  ResponseEntity<RescuedRat> deleteRescuedRat(@PathVariable Long id){
    if(id < 1) return ResponseEntity.notFound().build();
    RescuedRat rat = service.getRescuedRatById(id);
    service.deleteRescuedRat(id);
    return ResponseEntity.ok(rat);
    //return ResponseEntity.noContent().build();
  }

}
