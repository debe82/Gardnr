package se.salt.gardnr.plant;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.core.oidc.user.OidcUser;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;

import java.util.HashMap;
import java.util.Map;

@RestController
@RequestMapping("api/plants")
public class PlantController {
    @Autowired
    PlantService service;

    @GetMapping
    String getAllPlants(Model model, @AuthenticationPrincipal OidcUser principal) {
        if (principal != null) {
            model.addAttribute("profile", principal.getClaims());
        }
        System.out.println(principal.getName());
        return "hello world";
    }


    @GetMapping("{id}")
    ResponseEntity<Plant> getPlantById(@PathVariable int id) throws NotFoundException{
        Plant plant = service.getPlantById(id);
        return ResponseEntity.ok().body(plant);
    }

    @ExceptionHandler({ NotFoundException.class })
    public ResponseEntity notFound(Exception nfe) {
        Map<String, Object> json = new HashMap<>();
        json.put("message", nfe.getMessage());
        return new ResponseEntity(json, HttpStatus.NOT_FOUND);
    }
}
