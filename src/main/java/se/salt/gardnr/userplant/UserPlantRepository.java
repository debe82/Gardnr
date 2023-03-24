package se.salt.gardnr.userplant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserPlantRepository {
    @Autowired
    IJpaUserPlantRepository repo;

  public List<UserPlant> getAllPlants() {
    Iterable<UserPlant> allPlants = repo.findAll();
    List<UserPlant> userPlants = Streamable.of(allPlants).toList();
    return userPlants;
  }

  public UserPlant getPlantById(int id) {
    return repo.findById(id).orElse(null);
  }


  public UserPlant addNewPlant(UserPlant userPlant) {
    return repo.save(userPlant);
  }

  public UserPlant updatePlant(UserPlant userPlantToUpdate) {
    return repo.save((userPlantToUpdate));
  }

  public void deletePlant(UserPlant userPlant) {
    repo.delete(userPlant);
  }
}
