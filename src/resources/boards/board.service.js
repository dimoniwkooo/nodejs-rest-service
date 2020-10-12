const boardsRepo = require('./board.memory.repository');

const getAll = () => boardsRepo.getAll();

const get = id => boardsRepo.get(id);

const add = board => {
  if (!board.title || !board.columns[0]) return;
  for (const column of board.columns) {
    if (!column.title || !Number.isInteger(column.order)) return;
  }
  return boardsRepo.add(board);
};

const upd = (id, board) => boardsRepo.upd(id, board);

const del = id => boardsRepo.del(id);

module.exports = { getAll, get, add, upd, del };
