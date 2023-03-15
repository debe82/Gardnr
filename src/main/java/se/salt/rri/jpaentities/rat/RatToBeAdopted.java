package se.salt.rri.jpaentities.rat;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;

import java.util.List;

@Entity
public class RatToBeAdopted {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  Long id;

  String name;
  String breed;
  int age;
  String sex;
  String clinicalStatus;
  boolean spayed;
  Long city;
  List<String> pictures;


}
