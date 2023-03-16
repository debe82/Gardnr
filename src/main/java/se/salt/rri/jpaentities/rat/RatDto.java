package se.salt.rri.jpaentities.rat;

public record RatDto(
  String name,
  String city,
  int age,
  String breed,
  boolean spayed,
  String status
) {
}
