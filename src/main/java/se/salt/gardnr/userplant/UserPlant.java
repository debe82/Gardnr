package se.salt.gardnr.userplant;

import jakarta.persistence.*;
import se.salt.gardnr.plant.Plant;
import se.salt.gardnr.user.User;

import java.time.LocalDateTime;

@Entity
@Table(name = "userplants")
public class UserPlant {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userPlantId;
    private String userPlantName;

    private LocalDateTime startDate;


    @ManyToOne
    @JoinColumn(name = "userPlants")
    private Plant plant;

    @ManyToOne
    @JoinColumn(name = "userPlants")
    private User user;

}
