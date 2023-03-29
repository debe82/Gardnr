package se.salt.gardnr.user;

import se.salt.gardnr.userplant.UserPlant;

import java.util.List;

public record UserDto (    int userId,
                           String authId,
                           String userName,
                           String userEmail,
                           List<UserPlant> userPlants){

}
