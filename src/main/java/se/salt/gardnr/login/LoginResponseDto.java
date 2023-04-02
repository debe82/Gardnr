package se.salt.gardnr.login;

public class LoginResponseDto {
  private String message;

  public LoginResponseDto(String message) {
    super();
    this.message = message;
  }

  public String getMessage() {
    return message;
  }

  public void setMessage(String message) {
    this.message = message;
  }
}
