const tasksRepo = require('./task.db.repository');

const getAll = async boardId => {
  return await tasksRepo.getAll(boardId);
};

const get = async (boardId, taskId) => {
  return await tasksRepo.get(boardId, taskId);
};

const add = task => {
  return tasksRepo.add(task);
};


const upd = async (boardId, taskId, task) => {
  return await tasksRepo.upd(boardId, taskId, task);
};

const del = async (boardId, taskId) => {
  return await tasksRepo.del(boardId, taskId);
};

module.exports = { getAll, get, add, del, upd };
