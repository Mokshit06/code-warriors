const { Router } = require('express');
const passport = require('passport');
const { checkGuest, checkAuth } = require('../middleware/auth');

const router = Router();

router.get(
  '/login',
  checkGuest,
  passport.authenticate('google', {
    scope: ['profile', 'email'],
  })
);

router.get(
  '/callback',
  passport.authenticate('google', {
    failureRedirect: '/',
  }),
  (req, res) => {
    res.redirect('/auth/success');
  }
);

router.get('/success', checkAuth, (req, res) => {
  res.send(`
  <!DOCTYPE html>
  <html lang="en">
    <head>
      <title>Login Successful</title>
    </head>
    <body>
      <h1>Authorized</h1>
      <p>You can close this window now</p>
      <script>
        let originUrl = window.location.origin;
        if (window.location.hostname === 'localhost') {
          originUrl = 'http://localhost:3000'
        }
        window.opener.postMessage('success', originUrl);
        window.close();
      </script>
    </body>
  </html>
  `);
});

router.get('/logout', (req, res) => {
  req.session.destroy(err => {
    res.clearCookie('connect.sid');
    if (err) {
      res.status(500).send('Error');
    } else {
      res.send('Logged out');
    }
  });
});

module.exports = router;
