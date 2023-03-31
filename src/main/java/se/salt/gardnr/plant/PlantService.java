package se.salt.gardnr.plant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import java.util.List;

@Service
public class PlantService {

    @Autowired
    PlantRepository plantRepo;

  public List<Plant> getAllPlants() {
      return plantRepo.getAllPlants();
  }

  public Plant getPlantById(int id) throws NotFoundException{
    if (id < 1) throw new IllegalArgumentException("Wrong id");
   Plant plant = plantRepo.getPlantById(id);
    if (plant == null) throw new NotFoundException("No product with id " + id);
    return plant;
  }


}

