package se.salt.gardnr.userplant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.salt.gardnr.model.UserPlantDto;
import se.salt.gardnr.plant.Plant;
import se.salt.gardnr.plant.PlantRepository;

import java.util.List;

@Service
public class UserPlantService {

    @Autowired
    UserPlantRepository plantRepo;

    public List<UserPlant> getAllUserPlants() {
      return plantRepo.getAllUserPlants();
    }

//  public List<UserPlantDto> getAllPlantsInfoFor(){
//      return plantRepo.getAllPlantsForUser();
//  }

  public UserPlant getUserPlantById(int id) throws NotFoundException{
    if (id < 1) throw new IllegalArgumentException("Wrong id");
   UserPlant userPlant = plantRepo.getUserPlantById(id);
    if (userPlant == null) throw new NotFoundException("No product with id " + id);
    return userPlant;
  }

  public UserPlant addUserPlant(UserPlant userPlant) {System.out.println();
      UserPlant newUserPlant = plantRepo.addNewUserPlant(userPlant);
//      newUserPlant.setUser(userPlant.user);
//      newUserPlant.setPlant(userPlant.plant);
      return newUserPlant;
  }

  public void deleteUserPlant(int id) throws NotFoundException {
      UserPlant userPlant = plantRepo.getUserPlantByUserPlantId(id);
      System.out.println("passed id:" + id);
      System.out.println("id from found userPlanrts: " +userPlant.getUserPlantId());
      plantRepo.deleteUserPLant(userPlant);
  }
}

class NotFoundException extends Exception {
  public NotFoundException(String msg) { super(msg);}
}
