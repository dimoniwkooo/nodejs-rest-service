const router = require('express').Router();
const tasksService = require('./task.service');
const { customError, catchError } = require('../../common/error');

router
  .route('/')
  .get(
    catchError(async (req, res) => {
      res.json(await tasksService.getAll(req.boardId));
    }))

  .post(
    catchError(async (req, res) => {
      const newTask = await tasksService.add({
        ...req.body,
        boardId: req.boardId
      });
      if (newTask) {
        res.json(newTask);
      } else {
        throw new customError(400, 'Bad request');
      }
    }));

router
  .route('/:id')
  .get(
    catchError(async (req, res) => {
      const task = await tasksService.get(req.boardId, req.params.id);
      if (task) {
        res.json(task);
      } else {
        throw new customError(404, 'Task not found');
      }
    }))

  .put(
    catchError(async (req, res) => {
      const task = await tasksService.upd(req.boardId, req.params.id, req.body);
      res.json(task);
    }))

  .delete(
    catchError(async (req, res) => {
      if (await tasksService.del(req.boardId, req.params.id)) {
        res.status(204).end();
      } else {
        throw new customError(404, 'Task not found');
      }
    }));

module.exports = router;
