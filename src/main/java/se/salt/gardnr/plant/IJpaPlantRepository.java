package se.salt.gardnr.plant;

import org.springframework.data.jpa.repository.JpaRepository;


public interface IJpaPlantRepository extends JpaRepository<Plant, Integer> {
}
