package se.salt.gardnr.user;

import jakarta.persistence.*;
import se.salt.gardnr.plant.Plant;

import java.util.List;

@Entity
@Table(name= "users")
public class User {
  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private int userId;
  private String authId;
  private String userName;
  private String userEmail;
  @OneToMany(mappedBy="plantId")
  private List<Plant> plants;
}
