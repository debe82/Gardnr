package se.salt.rri.jpaentities.rat;

import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import se.salt.rri.jpaentities.city.City;

public record AddRatDto(
  String name,
  String breed,
  int age,
  String sex,
  String clinicalStatus,
  boolean spayed,
  String cityName
) {
}
