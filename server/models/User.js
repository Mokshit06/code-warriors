const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema(
  {
    googleId: {
      type: String,
      required: true,
    },
    displayName: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      lowercase: true,
    },
    image: {
      type: String,
    },
    isTeacher: {
      type: Boolean,
      default: false,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    notifications: [
      {
        from: {
          type: mongoose.Schema.Types.ObjectId,
        },
        isAnonymous: {
          type: Boolean,
        },
      },
    ],
  },
  {
    timestamps: true,
  }
);

const User = mongoose.model('User', UserSchema);

module.exports = User;
