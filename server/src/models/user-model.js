const Mongoose = require('mongoose');
const Schema = Mongoose.Schema;
const uniqueValidator = require('mongoose-unique-validator');
const { isEmail } = require('validator');

const userSchema = new Schema(
  {
    firstName: {
      type: 'string',
      required: true,
      validate: [
        {
          validator: (value) => value.length >= 2,
          message: 'First Name must be no shorter than 2 letters'
        },
        {
          validator: (value) => value.length <= 32,
          message: 'First Name must be no longer than 32 letters'
        }
      ]
    },
    lastName: {
      type: 'string',
      required: true,
      validate: [
        {
          validator: (value) => value.length >= 2,
          message: 'Last Name must be no shorter than 2 letters'
        },
        {
          validator: (value) => value.length <= 32,
          message: 'Last Name must be no longer than 32 letters'
        }
      ]
    },
    email: {
      type: 'string',
      required: true,
      validate: {
        validator: isEmail,
        message: 'Email is invalid'
      },
      unique: true
    },
    password: {
      type: 'string',
      required: true,
      validate: [
        {
          validator: (value) => value.length >= 6,
          message: 'Password must be no shorter than 6 symbols'
        },
        {
          validator: (value) => value.length <= 32,
          message: 'Password must be no longer than 32 symbols'
        },
        {
          validator: (value) => /^.*[0-9].*$/.test(value),
          message: 'Password must contain at least one number'
        },
        {
          validator: (value) => /^.*[A-ZĄČĘĖĮŠŲŪŽ].*$/.test(value),
          message: 'Password must contain at least one capital letter'
        }
      ]
    }
  },
  {
    timestamps: true
  }
);

userSchema.plugin(uniqueValidator);

const UserModel = Mongoose.model('User', userSchema);

module.exports = UserModel;
