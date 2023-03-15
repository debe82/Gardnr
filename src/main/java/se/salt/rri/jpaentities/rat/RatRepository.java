package se.salt.rri.jpaentities.rat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class RatRepository implements IRatRepository{

  @Autowired
  JpaRatRepository ratRepo;
}
