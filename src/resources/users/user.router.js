const router = require('express').Router();
const { serve } = require('swagger-ui-express');
const User = require('./user.model');
const usersService = require('./user.service');

router
  .route('/')
  .get(async (req, res) => {
    const users = await usersService.getAll();
    res.json(users.map(User.toResponse));
  })
  .post(async (req, res) => {
    const user = await usersService.add(
      new User({
        login: req.body.login,
        password: req.body.password,
        name: req.body.name
      })
    );
    res.json(User.toResponse(user));
  });

router
  .route('/:id')
  .get(async (req, res) => {
    const user = await usersService.get(req.params.id);
    res.json(User.toResponse(user));
  })
  .put(async (req, res) => {
    const user = await usersService.upd(req.params.id, req.body);
    res.json(User.toResponse(user));
  })
  .delete(async (req, res) => {
    const user = await usersService.del(req.params.id);
    res.json(User.toResponse(user));
  });

module.exports = router;
