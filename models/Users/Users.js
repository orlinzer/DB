
// import { User } from '../User/User';

export const users = {};

export const addUser = (user) => {
  users[user.username] = user;
};

export const removeUser = (username) => {
  delete users[username];
}

export const updateUser = (username, user) => {
  removeUser(username);
  addUser(user);
  // users[username] = user;
}

export const renderUsers = () => {
  let result = '';
  for (const user in users) {
    // result += user;
    result += users[user].render();
    // if (user.render) {
    //   result += user.render();
    // }
  }
  return result;
};
