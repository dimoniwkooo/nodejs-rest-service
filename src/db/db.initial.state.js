const User = require('../resources/users/user.model');
const Board = require('../resources/boards/board.model');
const Task = require('../resources/tasks/task.model');

const users = [
  new User({ name: 'name1', login: 'login1', password: 'pass1' }),
  new User({ name: 'name2', login: 'login2', password: 'pass2' }),
  new User({ name: 'name3', login: 'login3', password: 'pass3' })
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
