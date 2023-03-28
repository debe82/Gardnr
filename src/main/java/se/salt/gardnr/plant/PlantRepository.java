package se.salt.gardnr.plant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class PlantRepository {
    @Autowired
    IJpaPlantRepository jpaRepo;

    public List<Plant> getAllPlants(){
        List<Plant> plants = jpaRepo.findAll();
        System.out.println("lsitOfPlants: " + plants);
        return plants;
    }

    public Plant getPlantById(int id) {
        return jpaRepo.findById(id).orElse(null);
    }
}
