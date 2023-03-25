package se.salt.gardnr.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import se.salt.gardnr.userplant.IJpaUserPlantRepository;

@Repository
public class UserRepository {

    @Autowired
    IJpaUserRepository jpaRepo;
    public User getUserById(int id) {
        return jpaRepo.findById(id).orElse(null);
    }

   // public User getUserByAuthId(String authId) {
     //   return jpaRepo.findUserByAuthId(authId);
   // }
}
