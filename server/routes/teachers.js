const { Router } = require('express');
const User = require('../models/User');

const router = Router();

router.get('/', async (req, res) => {
  const teachers = await User.find({ isTeacher: true });

  res.send(teachers);
});

module.exports = router;
