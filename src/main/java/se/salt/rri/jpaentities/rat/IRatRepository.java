package se.salt.rri.jpaentities.rat;

import java.util.List;

public interface IRatRepository {
  List<RescuedRat> getAllRats();
  RescuedRat findRescuedRatByName(String name);

  RescuedRat findRescuedRatById(Long id);

  RescuedRat addNewRat(RescuedRat rat);
  RescuedRat update(RescuedRat rat);
  void deleteRescuedRat(RescuedRat rat);
}
