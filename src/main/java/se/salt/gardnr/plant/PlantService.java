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

  public Plant addNewPlant(Plant plant) {
    return repo.addNewPlant(plant);
  }

  public Plant updatePlant(int id, Plant plant) {
    Plant plantToUpdate = getPlantById(id);
    if (plant.getPlantName() != null && plant.getPlantName() != "") {
      plantToUpdate.setPlantName(plant.getPlantName());
      return repo.updatePlant(plantToUpdate);
    }
    return null;
  }
}
