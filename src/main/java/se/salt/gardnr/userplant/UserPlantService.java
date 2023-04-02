package se.salt.gardnr.userplant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.salt.gardnr.plant.Plant;

import java.util.List;

@Service
public class UserPlantService {

    @Autowired
    UserPlantRepository plantRepo;

    public List<UserPlant> getAllUserPlants() {
      return plantRepo.getAllUserPlants();
    }

  public UserPlant getUserPlantById(int id) throws NotFoundException{
    if (id < 1) throw new IllegalArgumentException("Wrong id");
   UserPlant userPlant = plantRepo.getUserPlantById(id);
    if (userPlant == null) throw new NotFoundException("No product with id " + id);
    return userPlant;
  }

  public int setTimeIncrement(int id, Plant plant) throws NotFoundException {
      UserPlant userPlant = getUserPlantById(id);
      String typeOfWatering = plant.getWatering();

      int increment = 0;

      if (typeOfWatering.equals("every week")) {
        increment =7;
      } else if (typeOfWatering.equals("every day")) {
        increment = 1;
      } else {
        increment = 30;
      }
      return increment;
  }

}

