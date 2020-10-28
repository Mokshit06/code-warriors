const mongoose = require('mongoose');
const { Router } = require('express');
const { checkAuth, checkAdmin } = require('../middleware/auth');
const User = require('../models/User');

const router = Router();

router.get('/me', checkAuth, (req, res) => {
  res.send(req.user);
});

router.get('/', checkAuth, checkAdmin, async (req, res) => {
  const users = await User.find({ isAdmin: false });

  res.send(users);
});

router.put('/:id', checkAuth, checkAdmin, async (req, res) => {
  const userId = req.params.id;

  if (!mongoose.isValidObjectId(userId)) {
    return res.status(404).send({ message: 'User not found' });
  }

  const user = await User.findByIdAndUpdate(userId, req.body, {
    new: true,
  });

  if (!user) {
    return res.status(404).send({ message: 'User not found' });
  }

  return user;
});

module.exports = router;
