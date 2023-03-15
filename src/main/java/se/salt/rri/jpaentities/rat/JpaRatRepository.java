package se.salt.rri.jpaentities.rat;

import org.springframework.data.repository.CrudRepository;

public interface JpaRatRepository extends CrudRepository<RatToBeAdopted, Long> {
}
