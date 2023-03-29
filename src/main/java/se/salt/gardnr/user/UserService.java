package se.salt.gardnr.user;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.salt.gardnr.model.UserPlantDto;
import se.salt.gardnr.plant.Plant;
import se.salt.gardnr.userplant.UserPlant;
import se.salt.gardnr.userplant.UserPlantRepository;

@Service
public class UserService {

    @Autowired
    UserRepository repo;

    @Autowired
    UserPlantRepository userPlantRepository;


    public User getUserById(int id) {
        return repo.getUserById(id);
    }

    public void addPlantForUser(Plant plant, User user) {



    }

    public User addPlantToUser(String id, UserPlantDto upDTO) {

        return null;
    }

    public UserDto convertToUserDto(User user) {
        return null;
    }

    public UserPlant createNewUserPlant(int id, Plant plant) {
        System.out.println("im in userService.createNEwUserPlant");
        UserPlant newUserPlant = new UserPlant();
        newUserPlant.setPlant(plant);
        newUserPlant.setStartDate(null);
        newUserPlant.setUser(getUserById(id));
        UserPlant up = userPlantRepository.addNewUserPlant(newUserPlant);
        System.out.println("im in userService.crateNewUserPlant after userPlantREpo.addNewuser");
        return up;
    }

    //  public User getUserByAuthId(String authId) {
//        return repo.getUserByAuthId(authId);
//    }
}
