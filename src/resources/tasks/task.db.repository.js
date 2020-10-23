const Task = require('./task.model');

const getAll = async boardId => Task.find({ boardId });

const get = async (boardId, taskId) => {
  return await Task.findOne({ _id: taskId, boardId });
};

const add = async task => Task.create(task);

const upd = async (boardId, taskId, task) => {
  return (await Task.updateOne({ _id: taskId, boardId }, task)).ok
    ? task
    : null;
};

const del = async (boardId, taskId) => {
  return (await Task.deleteOne({ _id: taskId, boardId })).ok;
};

const unassignTasks = async userId => {
  await Task.updateMany({ userId }, { userId: null });
};

const deleteTasks = async boardId => {
  await Task.deleteMany({ boardId });
};

module.exports = { getAll, get, add, upd, del, unassignTasks, deleteTasks };
