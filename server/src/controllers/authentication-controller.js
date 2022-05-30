const UserModel = require('../models/user-model');
const UserViewModel = require('../view-models/user-view-model');
const { hashAndSaltPassword, comparePasswords } = require('../helpers/hash-and-salt-password');
const generateToken = require('../helpers/generateJwt');

const register = async (req, res) => {
  const { firstName, lastName, email, password, repeatPassword } = req.body;
  try {
    if (password !== repeatPassword) throw new Error('Passwords do not match');
    const userDocument = await UserModel.create({
      firstName,
      lastName,
      email,
      password
    });

    const user = new UserViewModel(userDocument);
    res.status(201).json({
      user,
      token: generateToken({ email })
    });

    const hashedPassword = await hashAndSaltPassword(password);
    await UserModel.findByIdAndUpdate(userDocument.id, {
      password: hashedPassword
    });
  } catch (error) {
    res.status(400).json({
      message: error.message
    });
  }
};

const login = async (req, res) => {
  const { email, password } = req.body;
  try {
    const userDocument = await UserModel.findOne({ email });
    const equalPasswords = await comparePasswords(password, userDocument.password);
    if (equalPasswords) {
      const user = new UserViewModel(userDocument);
      res.status(200).json({ user, token: generateToken({ email }) });
    } else {
      res.status(401).json({ message: 'Wrong password' });
    }
  } catch (error) {
    res.status(404).json({ message: 'There is no account associated with this email address' });
  }
};

module.exports = {
  register,
  login
};
