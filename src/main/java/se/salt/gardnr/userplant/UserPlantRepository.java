package se.salt.gardnr.userplant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import se.salt.gardnr.model.UserPlantDto;
import se.salt.gardnr.plant.PlantRepository;

import java.util.List;

@Repository
public class UserPlantRepository {
    @Autowired
    IJpaUserPlantRepository jpaRepo;

    @Autowired
    PlantRepository plantRepository;

    List<UserPlant> getAllUserPlants(){
        return jpaRepo.findAll();
    }

    public UserPlant getUserPlantById(int id) {
        return jpaRepo.findById(id).orElse(null);
    }

    public UserPlant getUserPlantByUserPlantId(int id){
      UserPlant upToDelete = jpaRepo.findUserPlantByPlant(plantRepository.getPlantById(id));
      System.out.println("up from findUserPlantByPlant:" + upToDelete);
      return upToDelete;
    }

  public UserPlant addNewUserPlant(UserPlant userPlant) {
    System.out.println("im in userPlantService.addNewUSerPlant");

    return jpaRepo.save(userPlant);
  }

  public void deleteUserPLant(UserPlant userPlant) {
      jpaRepo.delete(userPlant);
  }

//    public List<UserPlantDto> getAllPlantsForUser() {
//        return jpaRepo.gimmeEverything();
//    }
}
