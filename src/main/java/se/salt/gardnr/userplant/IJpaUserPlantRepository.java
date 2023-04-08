package se.salt.gardnr.userplant;

import org.springframework.data.jpa.repository.JpaRepository;
import se.salt.gardnr.plant.Plant;

public interface IJpaUserPlantRepository extends JpaRepository<UserPlant, Integer> {

  UserPlant findUserPlantByPlant(Plant plant);
  UserPlant findUserPlantByUser(int id);

}