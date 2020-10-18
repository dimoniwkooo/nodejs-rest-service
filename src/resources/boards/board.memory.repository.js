const { Board, Column } = require('./board.model');
const { deleteTasks } = require('../tasks/task.memory.repository');

const boards = [];
boards.push(new Board(), new Board());

//  methods
const getAll = async () => boards.slice(0);

const get = async id => await boards.filter(el => el.id === id)[0];

const add = async board => {
  const newBoard = new Board({
    title: board.title,
    columns: []
  });
  for (const column of board.columns) {
    newBoard.columns.push(new Column(column));
  }
  boards.push(newBoard);
  return newBoard;
};

const upd = async (id, board) => {
  const item = boards.find(el => el.id === id);
  item.title = board.title;
  item.columns = board.columns;
  return boards.filter(el => el.id === id)[0];
};

const del = async id => {
  const item = boards.findIndex(el => el.id === id);
  if (item === -1) return;
  await deleteTasks(id);
  boards.splice(item, 1);
  return true;
};

module.exports = { getAll, get, add, upd, del };
