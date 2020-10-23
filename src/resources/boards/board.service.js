const boardsRepo = require('./board.db.repository');
const tasksRepo = require('../tasks/task.db.repository');

const getAll = () => boardsRepo.getAll();

const get = id => boardsRepo.get(id);

const add = board => {
  if (!board.title || !board.columns[0]) return;
  for (const column of board.columns) {
    if (!column.title || !Number.isInteger(column.order)) return;
  }
  return boardsRepo.add(board);
};

const upd = (id, board) => {
  return boardsRepo.upd(id, board);
};

const del = async id => {
  const result = await boardsRepo.del(id);
  if (result) tasksRepo.deleteTasks(id);
  return result;
};

module.exports = { getAll, get, add, upd, del };
