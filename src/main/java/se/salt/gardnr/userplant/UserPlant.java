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
    public int userPlantId;
    public String userPlantName;

    public LocalDateTime startDate;

    public int timeIncrement;


    @ManyToOne
    @JoinColumn(name = "plantId")
    public Plant plant;

    @ManyToOne
    @JoinColumn(name = "userId")
    private User user;

    public UserPlant() {
    }

    public UserPlant(int userPlantId, String userPlantName, LocalDateTime startDate, Plant plant, User user) {
        this.userPlantId = userPlantId;
        this.userPlantName = userPlantName;
        this.startDate = startDate;
    }

    public int getTimeIncrement() {
        return timeIncrement;
    }

    public void setTimeIncrement(int timeIncrement) {
        this.timeIncrement = timeIncrement;
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
    public void setPlant(Plant plant) {
        this.plant = plant;
    }
    public void setUser(User user) {
        this.user = user;
    }

}