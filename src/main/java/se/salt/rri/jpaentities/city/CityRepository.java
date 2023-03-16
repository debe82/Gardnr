package se.salt.rri.jpaentities.city;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

@Repository
public class CityRepository implements ICityRepository{
  @Autowired
  JpaCityRepository cityRepository;

  @Override
  public City addNewCity(String city) {
    return cityRepository.save(new City(city));
  }
}
