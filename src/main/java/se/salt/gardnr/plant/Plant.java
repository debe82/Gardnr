package se.salt.gardnr.plant;

import jakarta.persistence.*;
import se.salt.gardnr.userplant.UserPlant;

import java.time.LocalDateTime;
import java.util.List;

@Entity
@Table(name = "plants")
public class Plant {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int plantId;
    private String plantName;
    private String plantNameLatin;
    private String watering;
    private int tempMax;
    private int tempMin;
    private String idealLight;
    @Column(columnDefinition="TEXT")
    private String description;
    private String pictureLink;

    @OneToMany(mappedBy="userPlantId")
    private List<UserPlant> userPlants;


    public Plant() {
    }


    }
