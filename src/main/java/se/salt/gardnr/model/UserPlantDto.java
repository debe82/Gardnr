package se.salt.gardnr.model;

import java.time.LocalDateTime;

public record UserPlantDto(
  String name,
  String pictureLink,
  LocalDateTime startDate,
  String comment

) {
}
