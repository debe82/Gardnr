package se.salt.gardnr.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.salt.gardnr.plant.Plant;
import se.salt.gardnr.userplant.NotFoundException;
import se.salt.gardnr.userplant.UserPlant;
import se.salt.gardnr.userplant.UserPlantRepository;
import se.salt.gardnr.userplant.UserPlantService;

import java.time.LocalDateTime;

@Service
public class UserService {

    @Autowired
    UserRepository repo;

    @Autowired
    UserPlantRepository userPlantRepository;

    @Autowired
    UserPlantService userPlantService;

    public User getUserById(int id) {
        return repo.getUserById(id);
    }


    public UserPlant getUserPlantByUserId(int id){
        return userPlantRepository.getUserPlantByUserId(id);
    }

    public User checkUserCredentials(User user) {
        User checkedUserByEmail = repo.checkUserEmail(user);
        User checkedUserByPassword = repo.checkUserPassword(user);
        System.out.println("user by pwd:" + checkedUserByPassword);
        System.out.println("user by email:" + checkedUserByEmail);

        if (checkedUserByPassword != null && checkedUserByEmail != null) {
            if ((checkedUserByEmail.getUserEmail().equals(checkedUserByPassword.getUserEmail()) &&
              checkedUserByPassword.getUserPassword().equals(checkedUserByEmail.getUserPassword()))) {
                System.out.println("user matches!");
                return checkedUserByEmail;
            }
        }
        return null;
    }

    public User addNewUser(User user) {
        User checkdUser = repo.addNewUser(user);
        System.out.println("checkedUser: " + checkdUser);
        return checkdUser;
    }

    public UserPlant createNewUserPlant(int id, Plant plant) throws NotFoundException {
        UserPlant newUserPlant = new UserPlant();
        newUserPlant.setPlant(plant);
        newUserPlant.setStartDate(LocalDateTime.now());
        User user = getUserById(id);
        newUserPlant.setUser(user);
        UserPlant up = userPlantRepository.addNewUserPlant(newUserPlant);
        int increment = userPlantService.setTimeIncrement(up.userPlantId, plant);
        up.setTimeIncrement(increment);
        userPlantRepository.addNewUserPlant(up);
        return up;
    }

    public UserPlant updateUserPlant(int userPlantId, UserPlant userPlant) {
        UserPlant upToUpdate = userPlantRepository.getUserPlantById(userPlantId);
        if(userPlant.getUserPlantName() != null && userPlant.getUserPlantName() != "")
            upToUpdate.setUserPlantName(userPlant.getUserPlantName());
        if(userPlant.getStartDate() != null )
            upToUpdate.setStartDate(userPlant.getStartDate());

        UserPlant up = userPlantRepository.addNewUserPlant(upToUpdate);
        return up;
    }

    public void deleteUserPlant(int userPlantId) {
        userPlantRepository.deleteUserPlant(userPlantId);
    }

    public void deleteUser(User userToDelete) {
        repo.deleteUser(userToDelete);
    }

    //  public User getUserByAuthId(String authId) {
//        return repo.getUserByAuthId(authId);
//    }
}
