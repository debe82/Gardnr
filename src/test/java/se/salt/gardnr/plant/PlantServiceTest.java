package plant;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import se.salt.gardnr.GardnrApplicationTests;
import se.salt.gardnr.plant.NotFoundException;
import se.salt.gardnr.plant.Plant;
import se.salt.gardnr.plant.PlantService;
import static org.assertj.core.api.Assertions.assertThat;

import java.util.List;

import static org.junit.jupiter.api.Assertions.*;

@SpringBootTest
class PlantServiceTest extends GardnrApplicationTests {

  @Autowired
  PlantService plantService;

  @Test
  void shouldReturnListOfPlants() {
    List<Plant> listOfPlants = plantService.getAllPlants();
    assertThat(listOfPlants.size()).isGreaterThan(0);
  }

  @Test
  void shouldReturnSelectedPlant() throws NotFoundException {
    Plant plant = plantService.getPlantById(1);
    assertThat(plant.getPlantName()).isEqualTo("test plannt 1");
    assertThat(plant.getPlantId()).isEqualTo(1);
  }

}