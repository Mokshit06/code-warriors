const mongoose = require('mongoose');
const { io } = require('../io');

const MessageSchema = new mongoose.Schema(
  {
    from: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'User',
    },
    body: {
      type: String,
      required: true,
    },
    room: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Room',
    },
  },
  {
    timestamps: true,
  }
);

// MessageSchema.pre('save', async function () {
//   const message = this.populate(['from', 'to']);

//   io.on('connection', socket => {
//     const id = socket.handshake.query.id;

//     socket.broadcast.to(id).emit('receive-notification', {
//       text: message.body,
//       from: message.from,
//     });
//   });
// });

const Message = mongoose.model('Message', MessageSchema);

module.exports = Message;
