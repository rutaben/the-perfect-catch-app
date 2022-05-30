const UserModel = require('../models/user-model');

const verifyEmail = async (req, res) => {
  const { email } = req.query;
  if (!email) {
    res.status(400).json({
      message: 'No email provided'
    });

    return;
  }
  const userDocument = await UserModel.findOne({ email });
  res.status(200).json({ available: !userDocument });
};

module.exports = verifyEmail;
