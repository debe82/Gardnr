package plant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PlantRepository {
    @Autowired
    IJpaPlantRepository jpaRepo;

    List<Plant> getAllPlants(){
        return jpaRepo.findAll();
    }

    public Plant getPlantById(int id) {
        return jpaRepo.getReferenceById(id);
    }
}
