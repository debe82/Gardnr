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


}
