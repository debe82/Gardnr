package se.salt.gardnr.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.oauth2.core.user.OAuth2User;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class UserService {

    @Autowired
    UserRepository repo;


    public User getUserById(int id) {
        return repo.getUserById(id);
    }

    public User createNewUser(OAuth2User userauth) {
        return repo.createNewUser(userauth);
    }

    public User findUserByAuthId(String authid) {
        return repo.findUserByAuthId(authid);
    }


    //  public User getUserByAuthId(String authId) {
//        return repo.getUserByAuthId(authId);
//    }
}
