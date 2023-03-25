package se.salt.gardnr.user;

import org.springframework.data.jpa.repository.JpaRepository;

public interface IJpaUserRepository extends JpaRepository<User, Integer> {


}
