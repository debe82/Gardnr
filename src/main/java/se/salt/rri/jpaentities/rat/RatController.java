package se.salt.rri.jpaentities.rat;

import jakarta.servlet.http.HttpServletRequest;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.lang.Nullable;
import org.springframework.web.bind.annotation.*;

import java.net.URI;
import java.util.List;

@RestController
@RequestMapping("/api/rats")
public class RatController {
  @Autowired
  RatService service;

  @GetMapping
  ResponseEntity<List<RatDto>> getAllRats(){
    List<RatDto> listOfRatDto = service.convertListToDto(service.getAllRats());
    return ResponseEntity.ok().body(listOfRatDto);
  }

  @PostMapping
  ResponseEntity<RescuedRat> addRescuedRat(@RequestBody RescuedRat rat, HttpServletRequest req){
    RescuedRat ratToAdd =
    service.addRescuedRat(
      new RescuedRat(
        rat.getName(), rat.getBreed(), rat.getAge(), rat.getSex(), rat.getClinicalStatus(), rat.isSpayed(), rat.getCity()));
    URI location = URI.create(req.getRequestURL() + "/" + ratToAdd.getId());
    System.out.println("location");
    return ResponseEntity.created(location).body(ratToAdd);
  }

/*
    this.id = id;
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.sex = sex;
    this.clinicalStatus = clinicalStatus;
    this.spayed = spayed;
    this.city = city;
*/


//  @GetMapping("{id}")
//  ResponseEntity<RatDto> getRatByName(@PathVariable long id){
//    if(id < 1) return null;
//      RescuedRat rat = service.getRescuedRatById(id);
//      RescuedRat rat = service.getRatByName(rat.getName());
//      return null;
//    }
//    return null;
//  }

  @DeleteMapping("{id}")
  ResponseEntity<RescuedRat> deleteRescuedRat(@PathVariable long id){
    if(id < 1) return ResponseEntity.notFound().build();
    RescuedRat rat = service.getRescuedRatById(id);
    service.deleteRescuedRat(id);
    return ResponseEntity.ok(rat);
    //return ResponseEntity.noContent().build();
  }

}
