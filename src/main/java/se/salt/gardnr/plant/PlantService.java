package se.salt.gardnr.plant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class PlantService {

    @Autowired
    PlantRepository repo;

  public List<Plant> getAllPlant() {
    return repo.getAllPlants();
  }

  public Plant getPlantById(int id) {
    return repo.getPlantById(id);
  }

}
