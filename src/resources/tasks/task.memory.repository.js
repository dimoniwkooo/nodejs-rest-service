const Task = require('./task.model');

const tasks = [];
tasks.push(new Task(), new Task());

//  methods
const getAll = async boardId => {
  return tasks.filter(task => task.boardId === boardId) || [];
};

const get = async (boardId, taskId) => {
  const allTasks = await getAll(boardId);
  const task = allTasks.find(el => el.id === taskId);
  return task;
};

const add = async task => {
  const newTask = new Task(task);
  tasks.push(newTask);
  return newTask;
};

const upd = async (boardId, taskId, task) => {
  const currentTask = await get(boardId, taskId);
  const item = tasks.findIndex(el => el.id === taskId);
  const updTask = { ...currentTask, ...task };
  tasks.splice(item, 1, updTask);
  return updTask;
};

const del = async (boardId, taskId) => {
  const item = tasks.findIndex(el => el.id === taskId);
  if (item === -1) return false;
  tasks.splice(item, 1);
  return true;
};

const unassignTasks = async userId => {
  tasks.forEach(task => {
    if (task.userId === userId) task.userId = null;
  });
};

const deleteTasks = async boardId => {
  const tasksToDelete = tasks.filter(task => task.boardId === boardId);
  tasksToDelete.forEach(task => {
    const index = tasks.findIndex(el => el.id === task.id);
    tasks.splice(index, 1);
  });
};

module.exports = { getAll, get, add, upd, del, unassignTasks, deleteTasks };
