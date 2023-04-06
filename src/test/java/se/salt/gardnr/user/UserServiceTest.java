package se.salt.gardnr.user;

import org.junit.jupiter.api.*;
import org.springframework.beans.factory.annotation.Autowired;
import se.salt.gardnr.GardnrApplicationTests;
import se.salt.gardnr.NotFoundException;
import se.salt.gardnr.plant.Plant;
import se.salt.gardnr.plant.PlantService;
import se.salt.gardnr.userplant.UserPlant;

import java.util.List;

import static org.assertj.core.api.Assertions.assertThat;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class UserServiceTest extends GardnrApplicationTests {

  private static User testUser;
  private static Plant testPlant;

  @Autowired
  UserService userService;
  @Autowired
  PlantService plantService;


  @BeforeEach
  void setUp() throws NotFoundException {
    if(testUser == null) {
      testUser = userService.getUserById(1);
      testPlant = plantService.getPlantById(1);
    }
  }
  @Test
  @Order(1)
  void shouldReturnUser() {
    User user = userService.getUserById(2);
    assertThat(user).isNot(null);
    assertThat(user.getUserName()).isNotEqualTo(testUser.getUserName());
  }

  @Order(2)
  @Test
  void shouldCreateNewUserPlant() throws NotFoundException {
    UserPlant userPlant = userService.createNewUserPlant(testUser.getUserId(), testPlant);
    assertThat(userPlant).isNotEqualTo(null);
  }

  @Order(3)
  @Test
  void shouldUpdateUserPlant () throws NotFoundException {
    String newName = "New plant name";
    UserPlant userPlant = userService.createNewUserPlant(testUser.getUserId(), testPlant);
    int userPlantId = userPlant.getUserPlantId();
    userPlant.setUserPlantName(newName);
    UserPlant updatedUserPlant = userService.updateUserPlant(userPlantId, userPlant);
    assertThat(updatedUserPlant).isNot(null);
    assertThat(updatedUserPlant.getUserPlantName()).isEqualTo(newName);

  }

  @Order(4)
  @Test
  void shoulDeleteUserPlant() throws NotFoundException {
    UserPlant userPlant = userService.createNewUserPlant(testUser.getUserId(), testPlant);
    List<UserPlant> listOfUserPlants = testUser.getUserPlants();
    int initialLength = listOfUserPlants.size();
    int id = userPlant.getUserPlantId();
    userService.deleteUserPlant(id);
    int afterLength = listOfUserPlants.size();
    assertThat(afterLength).isEqualTo(initialLength-1);
  }

}