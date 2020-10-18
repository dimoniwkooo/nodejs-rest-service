const usersRepo = require('./user.memory.repository');

const getAll = () => usersRepo.getAll();

const get = id => usersRepo.get(id);

const add = user => usersRepo.add(user);

const del = id => usersRepo.del(id);

const upd = (id, body) => usersRepo.upd(id, body);

module.exports = { getAll, get, add, del, upd };
