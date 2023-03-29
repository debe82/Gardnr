package se.salt.gardnr.userplant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;
import se.salt.gardnr.model.UserPlantDto;

import java.util.List;

@Repository
public class UserPlantRepository {
    @Autowired
    IJpaUserPlantRepository jpaRepo;

    List<UserPlant> getAllUserPlants(){
        return jpaRepo.findAll();
    }

    public UserPlant getUserPlantById(int id) {
        return jpaRepo.findById(id).orElse(null);
    }

  public UserPlant addNewUserPlant(UserPlant userPlant) {
      return jpaRepo.save(userPlant);
  }

  public void deleteUserPLant(UserPlant userPlant) {
      jpaRepo.delete(userPlant);
  }

//    public List<UserPlantDto> getAllPlantsForUser() {
//        return jpaRepo.gimmeEverything();
//    }
}
