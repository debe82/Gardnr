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
    @JoinColumn(name = "userPlant")
    private User user;

    public UserPlant() {
    }

    public UserPlant(int userPlantId, String userPlantName, LocalDateTime startDate, Plant plant, User user) {
        this.userPlantId = userPlantId;
        this.userPlantName = userPlantName;
        this.startDate = startDate;
        this.plant = plant;
        this.user = user;
    }

    public int getUserPlantId() {
        return userPlantId;
    }

    public void setUserPlantId(int userPlantId) {
        this.userPlantId = userPlantId;
    }

    public String getUserPlantName() {
        return userPlantName;
    }

    public void setUserPlantName(String userPlantName) {
        this.userPlantName = userPlantName;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    public Plant getPlant() {
        return plant;
    }

    public void setPlant(Plant plant) {
        this.plant = plant;
    }

    public User getUser() {
        return user;
    }

    public void setUser(User user) {
        this.user = user;
    }
}
