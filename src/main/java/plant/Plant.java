package plant;

import jakarta.persistence.*;

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
    private String description;
    private LocalDateTime startDate;
//    private User user;


    public Plant() {
    }

    public int getPlantId() {
        return plantId;
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

    public List<String> getInstructions() {
        return instructions;
    }

    public void setInstructions(List<String> instructions) {
        this.instructions = instructions;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public LocalDateTime getStartDate() {
        return startDate;
    }

    public void setStartDate(LocalDateTime startDate) {
        this.startDate = startDate;
    }

    @Override
    public String toString() {
        return "Plant{" +
                "plantId=" + plantId +
                ", plantName='" + plantName + '\'' +
                ", plantNameLatin='" + plantNameLatin + '\'' +
                ", instructions=" + instructions +
                ", description='" + description + '\'' +
                ", startDate=" + startDate +
                '}';
    }
}
