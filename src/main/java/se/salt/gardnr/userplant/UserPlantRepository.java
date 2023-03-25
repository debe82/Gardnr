package se.salt.gardnr.userplant;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public class UserPlantRepository {
    @Autowired
    IJpaUserPlantRepository jpaRepo;

    List<UserPlant> getAllUserPlants(){
        return jpaRepo.findAll();
    }

    public UserPlant getUserPlantById(int id) {
        return jpaRepo.findById(id).orElse(null);
    }
}
