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
    private int PlantId;
    private String PlantName;
    private String PlantNameLatin;
    @ElementCollection
    private List<String> instructions;
    @Column(columnDefinition="TEXT")
    private String description;

    @OneToMany(mappedBy="plantId")
    private List<UserPlant> userPlants;


    public Plant() {
    }


    }
