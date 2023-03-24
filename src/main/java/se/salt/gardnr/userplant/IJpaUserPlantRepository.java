package se.salt.gardnr.userplant;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IJpaUserPlantRepository extends JpaRepository<UserPlant, Integer> {
}
