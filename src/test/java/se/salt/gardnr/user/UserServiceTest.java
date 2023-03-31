package se.salt.gardnr.user;

import org.apache.catalina.User;
import org.junit.jupiter.api.MethodOrderer;
import org.junit.jupiter.api.TestMethodOrder;
import org.springframework.beans.factory.annotation.Autowired;
import se.salt.gardnr.GardnrApplicationTests;

import static org.junit.jupiter.api.Assertions.*;

@TestMethodOrder(MethodOrderer.OrderAnnotation.class)
class UserServiceTest extends GardnrApplicationTests {

  @Autowired
  UserService userService;


}