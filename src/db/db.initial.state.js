const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');
const bcrypt = require('bcrypt');

// eslint-disable-next-line no-sync
const adminPasswordHash = bcrypt.hashSync('admin', 10);

const users = [
  new User({ name: 'Ivan Ivanov', login: 'admin', password: adminPasswordHash })
];

const boards = [
  new Board({
    title: 'board1',
    columns: [
      { title: 'column1', order: 1 },
      { title: 'column1', order: 2 }
    ]
  }),
  new Board({
    title: 'board2',
    columns: [
      { title: 'column2', order: 1 },
      { title: 'column2', order: 2 }
    ]
  })
];

const tasks = [
  new Task({
    title: 'task1',
    order: 100,
    description: 'task1_description'
  })
];

const DBInitialState = () => {
  users.forEach(user => user.save());
  boards.forEach(board => board.save());
  tasks.forEach(task => task.save());
};

module.exports = DBInitialState;
