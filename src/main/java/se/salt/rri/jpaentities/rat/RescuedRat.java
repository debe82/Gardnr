package se.salt.rri.jpaentities.rat;

import jakarta.persistence.*;
import se.salt.rri.jpaentities.city.City;

import java.util.List;

@Entity
public class RescuedRat {

  @Id
  @GeneratedValue(strategy = GenerationType.IDENTITY)
  private Long id;

  private String name;
  private String breed;
  private int age;
  private String sex;
  private String clinicalStatus;
  private boolean spayed;
  @ManyToOne
  @JoinColumn(name = "city_id")
  private City city;
//  @ElementCollection
//  List<String> pictures;

  public RescuedRat(){};

  public RescuedRat(String name, String breed, int age, String sex, String clinicalStatus, boolean spayed, City city) {
    this.id = id;
    this.name = name;
    this.breed = breed;
    this.age = age;
    this.sex = sex;
    this.clinicalStatus = clinicalStatus;
    this.spayed = spayed;
    this.city = city;
  }

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getName() {
    return name;
  }

  public void setName(String name) {
    this.name = name;
  }

  public String getBreed() {
    return breed;
  }

  public void setBreed(String breed) {
    this.breed = breed;
  }

  public int getAge() {
    return age;
  }

  public void setAge(int age) {
    this.age = age;
  }

  public String getSex() {
    return sex;
  }

  public void setSex(String sex) {
    this.sex = sex;
  }

  public String getClinicalStatus() {
    return clinicalStatus;
  }

  public void setClinicalStatus(String clinicalStatus) {
    this.clinicalStatus = clinicalStatus;
  }

  public boolean isSpayed() {
    return spayed;
  }

  public void setSpayed(boolean spayed) {
    this.spayed = spayed;
  }

  public City getCity() {
    return city;
  }

  public void setCity(City city) {
    this.city = city;
  }
}
