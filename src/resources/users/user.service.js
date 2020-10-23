const usersRepo = require('./user.db.repository');
const tasksRepo = require('../tasks/task.db.repository');

const getAll = () => usersRepo.getAll();

const get = id => usersRepo.get(id);

const add = user => {
  if (!user.name || !user.login || !user.password) return;
  return usersRepo.add(user);
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

module.exports = { getAll, get, add, del, upd };
