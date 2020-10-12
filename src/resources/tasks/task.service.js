const tasksRepo = require('./task.memory.repository');

const getAll = async boardId => {
  return await tasksRepo.getAll(boardId);
};

const get = async (boardId, taskId) => {
  const task = await tasksRepo.get(boardId, taskId);
  return task;
};

const add = task => {
  return tasksRepo.add(task);
};

const upd = async (boardId, taskId, task) => {
  const updTask = await tasksRepo.upd(boardId, taskId, task);
  return updTask;
};

const del = async (boardId, taskId) => {
  return await tasksRepo.del(boardId, taskId);
};

module.exports = { getAll, get, add, del, upd };
