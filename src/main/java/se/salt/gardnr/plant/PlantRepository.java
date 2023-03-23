package se.salt.gardnr.plant;

import org.hibernate.sql.ast.SqlTreeCreationException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.autoconfigure.freemarker.FreeMarkerTemplateAvailabilityProvider;
import org.springframework.data.util.Streamable;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PlantRepository {
    @Autowired
    IJpaPlantRepository repo;

  public List<Plant> getAllPlants() {
    Iterable<Plant> allPlants = repo.findAll();
    List<Plant> plants = Streamable.of(allPlants).toList();
    return plants;
  }

  public Plant getPlantById(int id) {
    return repo.findById(id).orElse(null);
  }


  public Plant addNewPlant(Plant plant) {
    return repo.save(plant);
  }

  public Plant updatePlant(Plant plantToUpdate) {
    return repo.save((plantToUpdate));
  }
}
