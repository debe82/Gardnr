package se.salt.gardnr.plant;

import org.springframework.data.jpa.repository.JpaRepository;


public interface IJpaUserPlantRepository extends JpaRepository<Plant, Integer> {
}
