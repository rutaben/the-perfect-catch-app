const jwt = require('jsonwebtoken');
const UserModel = require('../models/user-model');
const UserViewModel = require('../view-models/user-view-model');

const verifyToken = async (req, res) => {
  const { token } = req.body;
  try {
    const { email } = jwt.verify(token, process.env.JWT_SECRET);
    const userDocument = await await UserModel.findOne({ email });
    const user = new UserViewModel(userDocument);
    res.status(200).json(user);
  } catch (error) {
    res.status(403).json({ message: 'Invalid token' });
  }
};

module.exports = verifyToken;
