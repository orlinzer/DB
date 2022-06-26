import { sha512 } from "js-sha512";

export class User {

  constructor (
    username,
    password,
    email,
    phone,
    address,
    picture
  ) {

    // Authentication
    this.username = username;
    // this.password = password;
    this.setPassword(password);

    // Communication
    this.email = email;
    this.phone = phone;
    this.address = address;

    // Additional data
    this.picture = picture;
  }

  setUsername (username) {
    this.username = username;
  }

  setPassword (password) {
    this.password = sha512.digest(password);
  }

  authentication (username, password) {
    return this.username === username && sha512.digest(password).every((value, index) => value === this.password[index]);
  }

  render () {
    return `<tr>
      <td>${this.username}</td>
      <td>${this.password}</td>
      <td>${this.email}</td>
      <td>${this.phone}</td>
      <td>${this.address}</td>
      <td>${this.picture}</td>
      </tr>`;
  }
}

export default User;
