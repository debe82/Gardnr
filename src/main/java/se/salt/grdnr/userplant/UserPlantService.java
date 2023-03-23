package se.salt.grdnr.userplant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;


@Service
public class UserPlantService {

  @Autowired
  IUserPlantRepository repo;
  public List<UserPlant> getAllPlants() {
    return repo.getAllPlants();
  }
}
