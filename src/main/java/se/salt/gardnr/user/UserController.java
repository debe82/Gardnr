package se.salt.gardnr.user;

import jakarta.servlet.http.HttpServletRequest;
import jakarta.validation.Valid;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.annotation.AuthenticationPrincipal;
import org.springframework.security.oauth2.client.registration.ClientRegistration;
import org.springframework.security.oauth2.client.registration.ClientRegistrationRepository;
import org.springframework.security.oauth2.core.oidc.OidcIdToken;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.web.bind.annotation.*;
import se.salt.gardnr.plant.Plant;
import se.salt.gardnr.userplant.UserPlant;
import se.salt.gardnr.plant.NotFoundException;


import java.net.URI;
import java.net.URISyntaxException;
import java.util.HashMap;
import java.util.Map;
import java.util.Optional;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("/api/users")
public class UserController {

    @Autowired
    UserService service;

    private ClientRegistration registration;

    public UserController(ClientRegistrationRepository registrations) {
        this.registration = registrations.findByRegistrationId("auth0");
    }

//    @GetMapping
//    public ResponseEntity<List<User>> getAllUsers() {
//        List<User> listOfPlants = service.getAllUser();
//        return ResponseEntity.ok(listOfPlants);
//    }
@CrossOrigin(origins = "http://localhost:3000")
@GetMapping
public ResponseEntity<?> getUser(@AuthenticationPrincipal OAuth2User userauth) {
    if (userauth == null) {
        //System.out.println(userauth.getAttributes());
        /* userauth  exists
         => get user by auth id
         return full user to front end
        */


        return new ResponseEntity<>("", HttpStatus.OK);
    } else {
        String authid = userauth.getAttributes().get("aud").toString();
        User user =  service.findUserByAuthId(authid);
        if(user == null ){
        User newuser = service.createNewUser(userauth);
        System.out.println("this is user in if statement" + newuser);
        return ResponseEntity.ok().body(newuser);}
        else{
            System.out.println("this is the user in the else statement"  + user);
          return   ResponseEntity.ok().body(user);
        }
    }
}

/*
"sub":"google-oauth2|105931846179881605347",
"email_verified":true,
"iss":"https://dev-b1zvhq6qtydtr80k.us.auth0.com/",
"given_name":"Christine",
"locale":"en",
"nonce":"6RyKYdLuVpfd3FwNX-QlhjFE2bBCmuLjCRzsoRQ6XNw",
"picture":"https://lh3.googleusercontent.com/a/AGNmyxbJ6vIJKnONPKxT9djCtnCetF4XxcR70AdpNAzC=s96-c",
"sid":"w-IfJMVkbbW_2HJm9htDMHdA5WyRwZAb",
"aud":["QnI29kMHbukPpYnxyTSCNB1Pzczax3Ct"],
"updated_at":"2023-03-31T16:53:47.527Z",
"nickname":"christine.vanhoutte",
"name":"Christine Vanhoutte",
"exp":"2023-04-01T02:53:48Z",
"family_name":"Vanhoutte",
"iat":"2023-03-31T16:53:48Z",
"email":"christine.vanhoutte@appliedtechnology.se"
 */





    @PostMapping("/logout")
    public ResponseEntity<?> logout(HttpServletRequest request,
                                    @AuthenticationPrincipal(expression = "idToken") OidcIdToken idToken) {
        // send logout URL to client so they can initiate logout
        String logoutUrl = this.registration.getProviderDetails()
                .getConfigurationMetadata().get("end_session_endpoint").toString();

        Map<String, String> logoutDetails = new HashMap<>();
        logoutDetails.put("logoutUrl", logoutUrl);
        logoutDetails.put("idToken", idToken.getTokenValue());
        request.getSession(false).invalidate();
        return ResponseEntity.ok().body(logoutDetails);
    }

    @GetMapping("{id}")
    ResponseEntity<Map<String, Object>> getUserById(@PathVariable int id) {
        if (id < 0) return ResponseEntity.badRequest().build();
        User user = service.getUserById(id);
        if (user == null) return ResponseEntity.notFound().build();

        Map<String, Object> json = new HashMap<>();
        json.put("userId", user.getUserId());
        json.put("name", user.getUserName());
        json.put("email", user.getUserEmail());
        json.put("listOfUserPlants", user.getUserPlants());
        json.put(
                "plants",
                user.getUserPlants().stream().map(usrPlant -> usrPlant.plant)
        );
        return ResponseEntity.ok(json);
    }

    @PostMapping("{id}/plants")
    public ResponseEntity<UserPlant> addUserPlant(@PathVariable int id, @RequestBody Plant plant
    ) throws NotFoundException {
        if (id < 0) return ResponseEntity.badRequest().build();
        UserPlant newUserPlant = service.createNewUserPlant(id, plant);
        if (newUserPlant == null) return ResponseEntity.notFound().build();
        URI location = URI.create(("/api/users/" + newUserPlant.getUserPlantId() + "/plants"));
        return ResponseEntity.created(location).body(newUserPlant);
    }

    @DeleteMapping("{userId}/{userPlantId}")
    ResponseEntity deleteUserPlants(@PathVariable int userId, @PathVariable int userPlantId)  {
        if (userId < 0) return ResponseEntity.badRequest().build();
        if (userPlantId < 0) return ResponseEntity.badRequest().build();
        service.deleteUserPlant(userPlantId);

        return ResponseEntity.noContent().build();
    }

    @PutMapping("{userId}/{userPlantId}")
    public ResponseEntity<UserPlant> updateUserPlantData(@PathVariable int userPlantId, @RequestBody UserPlant userPlant){
        if (userPlantId < 0) return ResponseEntity.badRequest().build();
        if (userPlant == null) return ResponseEntity.badRequest().build();
        UserPlant upToUdate =  service.updateUserPlant(userPlantId, userPlant);
        if (upToUdate == null) return ResponseEntity.notFound().build();
        return ResponseEntity.accepted().body(upToUdate);
    }



//    @GetMapping("{authid}")
//    ResponseEntity<User> getUserById(@PathVariable String authid) {
//        User user = service.getUserByAuthId(authid);
//        return ResponseEntity.ok().body(user);
//    }

}
