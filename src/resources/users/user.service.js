const usersRepo = require('./user.db.repository');
const tasksRepo = require('../tasks/task.db.repository');
const bcrypt = require('bcrypt');

const getUserByLogin = login => usersRepo.getUserByLogin(login);

const getAll = () => usersRepo.getAll();

const get = id => usersRepo.get(id);

const add = async user => {
  if (!user.name || !user.login || !user.password) return;
  const passwordHash = await bcrypt.hash(user.password, 10);
  return usersRepo.add({ ...user, password: passwordHash });
};

const upd = user => {
  if (!user.name || !user.login || !user.password) return;
  return usersRepo.upd(user);
};

const del = async id => {
  const result = await usersRepo.del(id);
  if (result) await tasksRepo.unassignTasks(id);
  return result;
};

module.exports = {getUserByLogin, getAll, get, add, del, upd };
