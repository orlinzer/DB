
export class User {

  constructor (
    // Primary key
    id,
    username,
    password,
    email,
    phone,
    address,
    picture
  ) {
    // Primary key
    this.id = id;

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
      <td>${this.id}</td>
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
