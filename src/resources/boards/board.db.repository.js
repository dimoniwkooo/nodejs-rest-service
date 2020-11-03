const Board = require('./board.model');

const getAll = async () => Board.find({});

const get = async id => Board.findOne({ _id: id });

const add = async board => Board.create(board);

const upd = async (id, board) => {
  const boardToDB = {
    ...board,
    columns: board.columns.map(col => ({ ...col, _id: col.id }))
  };
  return (await Board.updateOne({ _id: id }, boardToDB)).ok ? board : null;
};

const del = async id => {
  return (await Board.deleteOne({ _id: id })).ok;
};

module.exports = { getAll, get, add, upd, del };
