module.exports = {
  checkAuth: (req, res, next) => {
    if (req.isAuthenticated()) {
      return next();
    }
    res.status(401);
    res.send('Not authorized');
  },

  checkGuest: (req, res, next) => {
    if (req.isAuthenticated()) {
      res.redirect('/auth/success');
    }

    next();
  },
  checkAdmin: (req, res, next) => {
    if (req.user.isAdmin) {
      return next();
    }
    res.redirect('/');
  },
};
