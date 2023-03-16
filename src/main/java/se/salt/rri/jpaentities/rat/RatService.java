package se.salt.rri.jpaentities.rat;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.stream.Collectors;

@Service
public class RatService {

  @Autowired IRatRepository repo;

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


  public void deleteRescuedRat(long id) {
    RescuedRat rat = getRescuedRatById(id);
    repo.deleteRescuedRat(rat);

  }
}
