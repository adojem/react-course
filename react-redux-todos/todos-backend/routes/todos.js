const express = require('express');
const Todo = require('../models/todo');

const router = express.Router();

router.get('/', (req, res, next) => {
   Todo.find({})
      .then(todos => res.send(todos))
      .catch(err => next(err));
});

router.post('/', (req, res, next) => {
   Todo.create(req.body)
      .then(todo => res.status(201).send(todo))
      .catch(err => next(err));
});

router.delete('/:id', (req, res, next) => {
   Todo.findOneAndDelete(req.params.id)
      .then(todo => res.send(todo))
      .catch(err => next(err));
});

module.exports = router;
