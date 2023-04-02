package se.salt.gardnr.user;


import jakarta.persistence.*;
import se.salt.gardnr.userplant.UserPlant;

import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    private String userPassword;
    private String userName;
    private String userEmail;
    @OneToMany(mappedBy="user")
    private List<UserPlant> userPlants;


    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getUserPassword() {
        return userPassword;
    }

    public void setUserPassword(String authId) {
        this.userPassword = authId;
    }

    public String getUserName() {
        return userName;
    }

    public void setUserName(String userName) {
        this.userName = userName;
    }

    public String getUserEmail() {
        return userEmail;
    }

    public void setUserEmail(String userEmail) {
        this.userEmail = userEmail;
    }


    public List<UserPlant> getUserPlants() {
        return userPlants;
    }

    public void setUserPlants(List<UserPlant> userPlants) {
        this.userPlants = userPlants;
    }


    @Override
    public String toString() {
        return "User{" +
                "userId=" + userId +
                ", authId='" + userPassword + '\'' +
                ", userName='" + userName + '\'' +
                ", userEmail='" + userEmail + '\'' +
     //           ", userPlants=" + userPlants +
                '}';
    }
}
