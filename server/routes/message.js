const { Router } = require('express');
const { checkAuth } = require('../middleware/auth');
const Message = require('../models/Message');
const User = require('../models/User');
const mongoose = require('mongoose');

const router = Router();

router.get('/:id', checkAuth, async (req, res) => {
  const to = req.params.id;
  if (!to || !mongoose.isValidObjectId(to)) {
    return res.status(404).send({ message: 'User not found' });
  }

  const toUser = await User.findById(to);

  if (!toUser) {
    return res.status(404).send({ message: 'User not found' });
  }

  const messages = await Message.find({
    $or: [
      { from: req.user.id, to },
      { from: to, to: req.user.id },
    ],
  }).populate(['from', 'to']);

  return res.send(messages);
});

router.post('/:id', checkAuth, async (req, res) => {
  const { body } = req.body;
  const to = req.params.id;

  if (!to || !mongoose.isValidObjectId(to)) {
    return res.send(404).send({ message: 'User not found' });
  }

  const toUser = await User.findById(to);

  const message = await Message.create({
    from: req.user.id,
    body,
    to,
  });

  res.status(201).send({});
});

module.exports = router;
