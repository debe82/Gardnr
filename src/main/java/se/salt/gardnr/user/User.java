package se.salt.gardnr.user;


import com.fasterxml.jackson.annotation.JsonProperty;
import jakarta.persistence.*;
import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;
import se.salt.gardnr.userplant.UserPlant;

import java.util.List;

@Entity
@Table(name = "users")
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int userId;
    @NotNull(message = "Password is required.")
    @Size(min = 6, message = "Password should be at least 6 characters.")

    private String userPassword;


    private String userName;

    @NotNull(message = "Email is required.")
    @Size(min = 1, message = "Email is required.")
    @Email(message = "Email is not well formatted.")
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
