package se.salt.rri.jpaentities.rat;

import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import se.salt.rri.jpaentities.city.City;
import se.salt.rri.jpaentities.city.CityRepository;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RatService {

  @Autowired IRatRepository repo;
  @Autowired
  CityRepository cityRepository;

  public List<RescuedRat> getAllRats(){
    return repo.getAllRats();
  }

  public RatDto convertToDto(RescuedRat rat) {
    String city = ""; //rat.getCity()
    return new RatDto(rat.getName(), city, rat.getAge(), rat.getBreed(), rat.isSpayed(), rat.getClinicalStatus());
  }

  public List<RatDto> convertListToDto(List<RescuedRat> rats){
    //getAllProducts().stream().map(entity -> ProductConverter.toResponseDTO(entity)).toList());
    return rats.stream().map(rat -> convertToDto(rat)).collect(Collectors.toList());
  }

  public RescuedRat getRatByName(String name){
    return repo.findRescuedRatByName(name);
  }

  public Long getRatIdByName(String name){
    RescuedRat rat = getRatByName(name);
    return rat.getId();
  }

  public RescuedRat addRescuedRat(RescuedRat rat){
    return repo.addNewRat(rat);
  }

  public RescuedRat getRescuedRatById(Long id){
    return repo.findRescuedRatById(id);
  }


  public void deleteRescuedRat(Long id) {
    RescuedRat rat = getRescuedRatById(id);
    repo.deleteRescuedRat(rat);

  }

  public RescuedRat updateRat(Long id, RescuedRat rat) {
    RescuedRat ratToUpdate = getRescuedRatById(id);

    if(rat.getName() != null || rat.getName() == "") {
      ratToUpdate.setName(rat.getName());
    } else {
      ratToUpdate.setName(ratToUpdate.getName());
    }
    if(rat.getAge() > 0 || rat.getAge() < 36) {
      ratToUpdate.setAge(rat.getAge());
    } else {
      return null;
    }
    if(rat.getBreed() != null || rat.getBreed() == "") {
      ratToUpdate.setBreed(rat.getBreed());
    } else {
      ratToUpdate.setBreed(ratToUpdate.getBreed());
    }
    if(rat.getSex() != null || rat.getSex() == "") {
      ratToUpdate.setSex(ratToUpdate.getSex());
    } else {
      ratToUpdate.setSex(ratToUpdate.getSex());
    }
    if(rat.getClinicalStatus() != null || rat.getClinicalStatus() == "") {
      ratToUpdate.setClinicalStatus(rat.getClinicalStatus());
    } else {
      ratToUpdate.setClinicalStatus(ratToUpdate.getClinicalStatus());
    }
    ratToUpdate.setSpayed(rat.isSpayed());

    if(rat.getCity() != null || rat.getCity() == "") {
      ratToUpdate.setCity(rat.getCity());
    } else {
      ratToUpdate.setCity(ratToUpdate.getCity());
    }

    return repo.update(ratToUpdate);
  }

/*  public RescuedRat convertForSave(AddRatDto ratToAdd) {
    City city = cityRepository.addNewCity(ratToAdd.cityName());
    return
      new RescuedRat(
        ratToAdd.name(), ratToAdd.breed(), ratToAdd.age(), ratToAdd.sex(), ratToAdd.clinicalStatus(), ratToAdd.spayed(), ratToAdd.cityName());
  }*/
}
