package se.salt.gardnr.user;


import com.fasterxml.jackson.annotation.JsonIgnore;
import jakarta.persistence.*;
import se.salt.gardnr.userplant.UserPlant;

import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    private String authId;
    private String userName;
    private String userEmail;
    @OneToMany(mappedBy="user")
    public List<UserPlant> userPlants;


    public int getUserId() {
        return userId;
    }

    public void setUserId(int userId) {
        this.userId = userId;
    }

    public String getAuthId() {
        return authId;
    }

    public void setAuthId(String authId) {
        this.authId = authId;
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
                ", authId='" + authId + '\'' +
                ", userName='" + userName + '\'' +
                ", userEmail='" + userEmail + '\'' +
     //           ", userPlants=" + userPlants +
                '}';
    }
}
