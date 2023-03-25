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
    @ElementCollection
    private List<String> instructions;
    @Column(columnDefinition="TEXT")
    private String description;

    @OneToMany(mappedBy="userPlantId")
    private List<UserPlant> userPlants;


    public Plant() {
    }


    }
