const User = require('./user.model');
const { unassignTasks } = require('../tasks/task.memory.repository');

const users = [];
users.push(new User(), new User(), new User());

// methods
const getAll = async () => {
  return users.slice(0);
};

const get = async id => {
  return await users.filter(el => el.id === id)[0];
};

const add = async user => {
  users.push(new User(user));
  return users[users.length - 1];
};

const upd = async (id, body) => {
  const item = users.find(x => x.id === id);
  item.name = body.name;
  item.login = body.login;
  item.password = body.password;
  return users.filter(el => el.id === id)[0];
};

const del = async id => {
  const allUsers = await getAll();
  const item = allUsers.findIndex(el => el.id === id);
  if (item >= 0) {
    allUsers.splice(item, 1);
    await unassignTasks(id);
    return true;
  }
  return false;
};

module.exports = { getAll, get, add, upd, del };
