package se.salt.gardnr.userplant;

import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.Order;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import se.salt.gardnr.GardnrApplicationTests;

import static org.assertj.core.api.Assertions.assertThat;
import static org.junit.jupiter.api.Assertions.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)

class UserPlantServiceTest  extends GardnrApplicationTests {

  @Autowired
  UserPlantService userPlantService;

  @Test
  @Order(1)
  void shouldReturnUserPlant() throws NotFoundException {
    UserPlant userPlant = userPlantService.getUserPlantById(1);
    assertThat(userPlant).isNot(null);
    assertThat(userPlant.getUserPlantId()).isEqualTo(1);
  }
}