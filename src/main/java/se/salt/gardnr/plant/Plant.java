package se.salt.gardnr.plant;

import com.fasterxml.jackson.annotation.JsonIgnore;
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


    @OneToMany(mappedBy="plant")
    private List<UserPlant> userPlants;


    public Plant() {
    }

    @Override
    public String toString() {
        return "Plant{" +
                "plantId=" + plantId +
                ", plantName='" + plantName + '\'' +
                ", plantNameLatin='" + plantNameLatin + '\'' +
                ", watering='" + watering + '\'' +
                ", tempMax=" + tempMax +
                ", tempMin=" + tempMin +
                ", idealLight='" + idealLight + '\'' +
                ", description='" + description + '\'' +
                ", pictureLink='" + pictureLink + '\'' +
     //           ", userPlants=" + userPlants +
                '}';
    }

    public int getPlantId() {
        return plantId;
    }

    public void setPlantId(int plantId) {
        this.plantId = plantId;
    }

    public String getPlantName() {
        return plantName;
    }

    public void setPlantName(String plantName) {
        this.plantName = plantName;
    }

    public String getPlantNameLatin() {
        return plantNameLatin;
    }

    public void setPlantNameLatin(String plantNameLatin) {
        this.plantNameLatin = plantNameLatin;
    }

    public String getWatering() {
        return watering;
    }

    public void setWatering(String watering) {
        this.watering = watering;
    }

    public int getTempMax() {
        return tempMax;
    }

    public void setTempMax(int tempMax) {
        this.tempMax = tempMax;
    }

    public int getTempMin() {
        return tempMin;
    }

    public void setTempMin(int tempMin) {
        this.tempMin = tempMin;
    }

    public String getIdealLight() {
        return idealLight;
    }

    public void setIdealLight(String idealLight) {
        this.idealLight = idealLight;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPictureLink() {
        return pictureLink;
    }

    public void setPictureLink(String pictureLink) {
        this.pictureLink = pictureLink;
    }
//
//    public List<UserPlant> getUserPlants() {
//        return userPlants;
//    }
//
//    public void setUserPlants(List<UserPlant> userPlants) {
//        this.userPlants = userPlants;
//    }
}
