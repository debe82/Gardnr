package se.salt.gardnr.user;

import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.ResponseEntity;
import org.springframework.web.client.RestTemplate;
import se.salt.gardnr.GardnrApplicationTests;
import se.salt.gardnr.plant.Plant;
import se.salt.gardnr.userplant.NotFoundException;
import se.salt.gardnr.userplant.UserPlant;
import se.salt.gardnr.userplant.UserPlantService;

import java.util.List;
import static org.assertj.core.api.Assertions.assertThat;


@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class UserAPITest extends GardnrApplicationTests{

  @Autowired
  UserPlantService userPlantService;
  private static User testUser1;
  private static Plant testPlant1;

  @BeforeAll
  static void setUp(@Autowired RestTemplate template, @Value("${server.port}") int port) {
    String baseURL = "http://localhost:%s/api/users/1".formatted(port);
    ResponseEntity<User> userResponse = template
      .getForEntity(baseURL,User.class);
    testUser1 = userResponse.getBody();

    baseURL = "http://localhost:%s/api/plants/1".formatted(port);
    ResponseEntity<Plant> plantResponse = template
      .getForEntity(baseURL,Plant.class);
    testPlant1 = plantResponse.getBody();

  }

  @AfterAll
  static void tearDown() {

  }

  @Test
  @Order(1)
  void shouldReturnBadRequest(){
    //act
    ResponseEntity<User> response = restTemplate.getForEntity("http://localhost:%s/api/userr/-1".formatted(port), User.class);
    User user = response.getBody();
    assertThat(response.getStatusCode().value()).isEqualTo(400);
    assertThat(user).isEqualTo(null);
  }

  @Test
  @Order(2)
  void shouldReturnNotFound(){
    //act
    ResponseEntity<User> response = restTemplate.getForEntity("http://localhost:%s/api/user/999".formatted(port), User.class);
    User user = response.getBody();
    assertThat(response.getStatusCode().value()).isEqualTo(404);
    assertThat(user).isEqualTo(null);

  }

  @Test
  @Order(3)
  void shouldReturnUser() {
    String baseURL = "http://localhost:%s/api/users/1".formatted(port);
    ResponseEntity<User> response = restTemplate.exchange(baseURL, HttpMethod.GET, HttpEntity.EMPTY, User.class);
    User user = response.getBody();
    assertThat(response.getStatusCode().value()).isEqualTo(200);
    assertThat(user.getUserName()).isEqualTo("testUser1");
    assertThat(user.getUserId()).isEqualTo(1);
  }

  @Test
  @Order(4)
  void shouldAddUserPlant() {
    String baseURL = "http://localhost:%s/api/users/1/plants".formatted(port);
    ResponseEntity<UserPlant> response = restTemplate.exchange(baseURL, HttpMethod.POST, new HttpEntity<>(testPlant1), UserPlant.class);
    UserPlant testUserPlant = response.getBody();
    assertThat(response.getStatusCode().value()).isEqualTo(201);
    assertThat(testUserPlant).isNot(null);
    assertThat(testUserPlant.userPlantId).isNot(null);
  }

  @Test
  @Order(5)
  void shouldUpdateUserPlant() throws NotFoundException {
    String newName = "test name updated";
    String baseURL = "http://localhost:%s/api/users/1/1".formatted(port);
    UserPlant userPlant = userPlantService.getUserPlantById(1);
    userPlant.setUserPlantName(newName);
    ResponseEntity<UserPlant> response = restTemplate.exchange(baseURL, HttpMethod.PUT, new HttpEntity<UserPlant>(userPlant), UserPlant.class);
    UserPlant updatedUserPlant = response.getBody();
    assertThat(updatedUserPlant.userPlantName).isEqualTo(newName);
    assertThat(response.getStatusCode().value()).isEqualTo(201);
  }

  @Test
  @Order(6)
  void shouldDeleteUserPlant() {
    String baseURL = "http://localhost:%s/api/users/1/1".formatted(port);
    ResponseEntity<UserPlant> response = restTemplate.exchange(baseURL, HttpMethod.DELETE, HttpEntity.EMPTY, UserPlant.class);
    assertThat(response.getStatusCode().value()).isEqualTo(204);
  }





}
