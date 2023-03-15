package se.salt.rri.jpaentities.rat;

import jakarta.persistence.*;

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
  @ElementCollection
  List<String> pictures;


}
