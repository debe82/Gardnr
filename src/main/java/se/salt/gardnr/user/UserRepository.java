package se.salt.gardnr.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Repository;
import se.salt.gardnr.userplant.IJpaUserPlantRepository;

@Repository
public class UserRepository {

    @Autowired
    IJpaUserRepository jpaRepo;
    public User getUserById(int id) {
        return jpaRepo.findById(id).orElse(null);
    }

    public User createNewUser(OAuth2User userauth) {
        User newUser = new User();
        newUser.setAuthId(userauth.getAttributes().get("aud").toString());
        newUser.setUserEmail(userauth.getAttributes().get("email").toString());
        newUser.setUserName(userauth.getAttributes().get("name").toString());
        return jpaRepo.save(newUser);
    }

    public User findUserByAuthId(String authid) {
        return jpaRepo.findByAuthId(authid);
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
    // public User getUserByAuthId(String authId) {
     //   return jpaRepo.findUserByAuthId(authId);
   // }
}
