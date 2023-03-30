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


    public UserPlant getUserPlantByUserId(int id){
        return userPlantRepository.getUserPlantByUserId(id);
    }

    public UserPlant createNewUserPlant(int id, Plant plant) {
        System.out.println("userService->createNewUserPlant start");
        UserPlant newUserPlant = new UserPlant();
        newUserPlant.setPlant(plant);
        newUserPlant.setStartDate(null);
        newUserPlant.setUser(getUserById(id));
        UserPlant up = userPlantRepository.addNewUserPlant(newUserPlant);
        System.out.println("userService->createNewUserPlant end");
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

    //  public User getUserByAuthId(String authId) {
//        return repo.getUserByAuthId(authId);
//    }
}
