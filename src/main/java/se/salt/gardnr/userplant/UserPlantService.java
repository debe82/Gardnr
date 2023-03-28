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
}

class NotFoundException extends Exception {
  public NotFoundException(String msg) { super(msg);}
}
