package se.salt.rri.jpaentities.city;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

@Entity
public class City {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  Long id;

  String name;
  String country;

  public City(String name, String country){
    this.name = name;
    this.country = country;
  }

}
