package se.salt.grdnr.userplant;

public record UserPlantDto(
  String name,
  String city,
  int age,
  String breed,
  boolean spayed,
  String status
) {
}
