package se.salt.gardnr.userplant;

import org.springframework.data.jpa.repository.JpaRepository;
import se.salt.gardnr.model.UserPlantDto;

import java.util.List;


public interface IJpaUserPlantRepository extends JpaRepository<UserPlant, Integer> {
//
//  @Query(value = "SELECT c FROM Course c WHERE c.curriculum in :curriculums")
//  List<Course> getCoursesForCurriculums(@Param("curriculums") List<Curriculum> currs)
//
  //List<UserPlantDto> gimmeEverything();
}
