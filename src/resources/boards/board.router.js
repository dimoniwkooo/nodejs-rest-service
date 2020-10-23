const router = require('express').Router();
const boardsService = require('./board.service');
const taskRouter = require('../tasks/task.router');
const { customError, catchError } = require('../../common/error');
const Board = require('./board.model');

router.use(
  '/:id/tasks/',
  (req, res, next) => {
    req.boardId = req.params.id;
    next();
  },
  taskRouter
);

router
  .route('/')
  .get(
    catchError(async (req, res) => {
      const boards = await boardsService.getAll();
      res.json(boards.map(el => Board.toResponse(el)));
    })
  )

  .post(
    catchError(async (req, res) => {
      const newBoard = await boardsService.add(req.body);
      if (newBoard) {
        res.json(Board.toResponse(newBoard));
      } else {
        throw new customError(400, 'Bad request');
      }
    })
  );

router
  .route('/:id')
  .get(
    catchError(async (req, res) => {
      const board = await boardsService.get(req.params.id);
      if (board) {
        res.json(Board.toResponse(board));
      } else {
        throw new customError(404, 'Board not found');
      }
    })
  )

  .put(
    catchError(async (req, res) => {
      const board = await boardsService.upd(req.params.id, req.body);
      if (board) {
        res.json(board);
      } else {
        throw new customError(400, 'Bad request');
      }
    })
  )

  .delete(
    catchError(async (req, res) => {
      if (await boardsService.del(req.params.id)) {
        res.status(204).end();
      } else {
        throw new customError(404, 'Board not found');
      }
    })
  );

module.exports = router;
