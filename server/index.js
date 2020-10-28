const path = require('path');
const express = require('express');
const dotenv = require('dotenv-flow');

dotenv.config();

const connectDatabase = require('./config/database');
const mongoose = require('mongoose');
const session = require('express-session');
const passport = require('passport');
const MongoStore = require('connect-mongo')(session);
const passportConfig = require('./config/passport');
const cors = require('cors');
const morgan = require('morgan');
const Filter = require('bad-words');

const { app, io, server } = require('./io');
const authRouter = require('./routes/auth');
const usersRouter = require('./routes/user');
const teachersRouter = require('./routes/teachers');
const courseRouter = require('./routes/course');
const Message = require('./models/Message');
const Room = require('./models/Room');

passportConfig(passport);

const filter = new Filter();

const corsConfig = cors({
  origin: 'http://localhost:3000',
  credentials: true,
});

const publicDir = path.join(__dirname, '/public');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
  app.use(corsConfig);
}

app
  .use(express.json())
  .use(express.urlencoded({ extended: false }))
  .use(
    session({
      secret: process.env.COOKIE_SECRET,
      resave: false,
      saveUninitialized: false,
      store: new MongoStore({
        mongooseConnection: mongoose.connection,
      }),
    })
  )
  .use(passport.initialize())
  .use(passport.session())
  .use('/auth', authRouter)
  .use('/api/users', usersRouter)
  .use('/api/teachers', teachersRouter)
  .use('/api/courses', courseRouter);

io.on('connection', async socket => {
  const id = socket.handshake.query.id;

  socket.on('send-rooms', async () => {
    const rooms = await Room.find({
      users: id,
    }).populate({
      path: 'users',
    });

    socket.emit('get-rooms', {
      rooms,
    });
  });

  socket.on('join', async ({ roomId, isAnonymous, users }) => {
    let room = await Room.findById(roomId);

    if (!room) {
      room = await Room.create({ users, isAnonymous });
    }

    socket.join(room.id);
  });

  socket.on('render-messages-request', async ({ roomId }) => {
    const messages = await Message.find({
      room: roomId,
    }).populate(['from', 'to']);

    socket.emit('render-messages-response', {
      messages,
    });
  });

  socket.on('send-message', async ({ text, roomId }) => {
    const cleanMessage = filter.clean(text);

    const createdMessage = await Message.create({
      from: id,
      body: cleanMessage,
      room: roomId,
    });

    const message = await createdMessage.populate(['from']).execPopulate();

    io.in(roomId).emit('receive-message', { message, roomId });
  });
});

if (process.env.NODE_ENV === 'production') {
  app.use(
    express.static(publicDir, {
      extensions: ['html'],
    })
  );

  app.get('/courses', (req, res) => {
    res.sendFile(path.join(publicDir, 'courses.html'));
  });

  app.get('/courses/*', (req, res) => {
    res.sendFile(path.join(publicDir, 'courses/[id].html'));
  });
}

const main = async () => {
  await connectDatabase();

  const PORT = process.env.PORT || 5000;

  server.listen(PORT, () => {
    console.log(`Server running on ${PORT}`);
  });
};

main();
