package se.salt.gardnr.userplant;

import org.springframework.data.jpa.repository.JpaRepository;
import se.salt.gardnr.model.UserPlantDto;
import se.salt.gardnr.plant.Plant;
import se.salt.gardnr.user.User;

import java.util.List;


public interface IJpaUserPlantRepository extends JpaRepository<UserPlant, Integer> {

}
