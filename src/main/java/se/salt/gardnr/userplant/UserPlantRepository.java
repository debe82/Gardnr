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
//
//    public UserPlant getUserPlantByUserPlantId(int id){
//      System.out.println("userPlantRepository->getUserPlantByUserPlantId start");
//      UserPlant upToDelete = jpaRepo.findUserPlantByPlant(plantRepository.getPlantById(id));
//      System.out.println("userPlantRepository->getUserPlantByUserPlantId end");
//      return upToDelete;
//    }

  public UserPlant addNewUserPlant(UserPlant userPlant) {
    return jpaRepo.save(userPlant);
  }

//  public void deleteUserPLant(UserPlant userPlant) {
//      jpaRepo.delete(userPlant);
//  }

  public void deleteUserPlant(int id) {
      UserPlant userPlant = getUserPlantById(id);
      if (userPlant != null){
        jpaRepo.deleteById(id);
      }

  }
//
//  public UserPlant getUserPlantByUserId(int id) {
//      UserPlant up = jpaRepo.findUserPlantByUser(id);
//      System.out.println("userPlant found: " + up);
//      return jpaRepo.findUserPlantByUser(id);
//  }

//    public UserPlant getUserPlantByUserPlantId(int id){
//      System.out.println("userPlantRepository->getUserPlantByUserPlantId start");
//      UserPlant upToDelete = jpaRepo.findUserPlantByPlant(plantRepository.getPlantById(id));
//      System.out.println("userPlantRepository->getUserPlantByUserPlantId end");
//      return upToDelete;
//    }

//  public UserPlant addNewUserPlant(UserPlant userPlant) {
//    return jpaRepo.save(userPlant);
//  }

//  public void deleteUserPLant(UserPlant userPlant) {
//      jpaRepo.delete(userPlant);
//  }

//  public void deleteUserPlant(int id) {
//      UserPlant userPlant = getUserPlantById(id);
//      if (userPlant != null){
//        jpaRepo.deleteById(id);
//      }
//
//  }

//  public UserPlant getUserPlantByUserId(int id) {
//      UserPlant up = jpaRepo.findUserPlantByUser(id);
//      System.out.println("userPlant found: " + up);
//      return jpaRepo.findUserPlantByUser(id);
//  }

//    public List<UserPlantDto> getAllPlantsForUser() {
//        return jpaRepo.gimmeEverything();
//    }
}
