package se.salt.gardnr.plant;

import org.junit.jupiter.api.*;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import se.salt.gardnr.GardnrApplicationTests;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
public class PlantAPITest extends GardnrApplicationTests {

  @BeforeAll
  static void setUp() {

  }

  @AfterAll
  static void tearDown() {

  }

  @Test
  @Order(1)
  void shouldReturnBadRequest(){
    //act
    ResponseEntity<Plant> response = restTemplate.getForEntity("http://localhost:%s/api/plants/-1".formatted(port), Plant.class);
    Plant plant = response.getBody();
    assertThat(response.getStatusCode().value()).isEqualTo(400);
    assertThat(plant).isEqualTo(null);
  }

  @Test
  @Order(2)
  void shouldReturnNotFound(){
    //act
    ResponseEntity<Plant> response = restTemplate.getForEntity("http://localhost:%s/api/plants/999".formatted(port), Plant.class);
    Plant plant = response.getBody();
    assertThat(response.getStatusCode().value()).isEqualTo(404);
    assertThat(plant).isEqualTo(null);

  }

  @Test
  @Order(3)
  void shouldListPlants(){
    //act
    ResponseEntity<List> response = restTemplate.getForEntity("http://localhost:%s/api/plants".formatted(port), List.class);
    List plants = response.getBody();

    //assert
    assertThat(response.getStatusCode().value()).isEqualTo(200);
    assertThat(plants).hasSize(1);
  }

  @Test
  @Order(4)
  void shouldReturnPlant() {
    String baseURL = "http://localhost:%s/api/plants/4".formatted(port);
    ResponseEntity<Plant> response = restTemplate.exchange(baseURL, HttpMethod.GET, HttpEntity.EMPTY, Plant.class);
    Plant plant = response.getBody();
    assertThat(response.getStatusCode().value()).isEqualTo(200);
    assertThat(plant.getPlantName()).isEqualTo("ariegated Carabbean Agave");
    assertThat(plant.getPlantId()).isEqualTo(4);
  }




}
