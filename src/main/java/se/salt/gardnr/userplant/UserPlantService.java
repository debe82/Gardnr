package se.salt.gardnr.userplant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class UserPlantService {

    @Autowired
    UserPlantRepository repo;

  public List<UserPlant> getAllPlant() {
    return repo.getAllPlants();
  }

  public UserPlant getPlantById(int id) {
    return repo.getPlantById(id);
  }

  public UserPlant addNewPlant(UserPlant userPlant) {
    return repo.addNewPlant(userPlant);
  }

  public UserPlant updatePlant(int id, UserPlant userPlant) {
    UserPlant userPlantToUpdate = getPlantById(id);
    if (userPlant.getPlantName() != null && userPlant.getPlantName() != "") {
      userPlantToUpdate.setPlantName(userPlant.getPlantName());
      return repo.updatePlant(userPlantToUpdate);
    }
    return null;
  }

  public void deletePlant(int id) {
    UserPlant userPlant = getPlantById(id);
    repo.deletePlant(userPlant);
  }
}
