package se.salt.rri.jpaentities.city;

import jakarta.persistence.*;
import se.salt.rri.jpaentities.rat.RescuedRat;

@Entity
public class City {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  Long id;

  String name;

//  @OneToOne(mappedBy = "city")
//  private RescuedRat rat;
  public City (){}

  public City(String name){
    this.name = name;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

}
