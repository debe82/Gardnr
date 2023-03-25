package se.salt.gardnr.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserService {

    @Autowired
    UserRepository repo;


    public User getUserById(int id) {
        return repo.getUserById(id);
    }

   //  public User getUserByAuthId(String authId) {
//        return repo.getUserByAuthId(authId);
//    }
}
