package se.salt.gardnr.user;

import org.springframework.data.jpa.repository.JpaRepository;
import se.salt.gardnr.userplant.UserPlant;

public interface IJpaUserRepository extends JpaRepository<User, Integer> {
  User findByAuthId(String authid);
  // User findUserByAuthId(String authId);

}
