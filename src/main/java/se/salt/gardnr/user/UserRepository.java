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

    public User checkUserEmail(User user) {
        User userFound = jpaRepo.findUserByUserEmail(user.getUserEmail());
        if (userFound != null) {
            if (userFound.getUserEmail().equals(user.getUserEmail())) {
                return userFound;
            }
        }
        return null;
    }

    public User checkUserPassword(User user) {
        User userFound = jpaRepo.findUserByUserPassword(user.getUserPassword());
        if (userFound != null) {
            if ((userFound.getUserPassword().equals(user.getUserPassword()))) {
                return userFound;
            }
        }
        return null;
    }

    public User addNewUser(User user) {
        if (checkUserEmail(user) == null) {
            return  jpaRepo.save(user);
        }
        return null;
    }

    public void deleteUser(User userToDelete) {
        jpaRepo.delete(userToDelete);
    }

   // public User getUserByAuthId(String authId) {
     //   return jpaRepo.findUserByAuthId(authId);
   // }
}
