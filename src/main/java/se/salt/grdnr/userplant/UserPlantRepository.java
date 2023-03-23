package se.salt.grdnr.userplant;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserPlantRepository implements IUserPlantRepository{

  @Autowired
  JpaUserPlantRepository repo;


  @Override
  public List<UserPlant> getAllPlants() {
    Iterable<UserPlant> all = repo.findAll();
    List<UserPlant> plants = Streamable.of(all).toList();
    return plants;
  }
}
