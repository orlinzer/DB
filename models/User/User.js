
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
    this.password = password;

    // Communication
    this.email = email;
    this.phone = phone;
    this.address = address;

    // Additional data
    this.picture = picture;
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
