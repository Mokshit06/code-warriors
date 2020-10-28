const mongoose = require('mongoose');

const RoomSchema = new mongoose.Schema(
  {
    users: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User',
      },
    ],
    isAnonymous: {
      type: Boolean,
    },
  },
  {
    toJSON: {
      virtuals: true,
    },
    timestamps: true,
  }
);

RoomSchema.virtual('messages', {
  ref: 'Message',
  localField: '_id',
  foreignField: 'room',
});

const Room = mongoose.model('Room', RoomSchema);

module.exports = Room;
