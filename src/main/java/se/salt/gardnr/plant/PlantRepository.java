package se.salt.gardnr.plant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class PlantRepository {
    @Autowired
    IJpaPlantRepository repo;
}
