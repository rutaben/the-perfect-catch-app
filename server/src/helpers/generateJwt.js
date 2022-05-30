const jwt = require('jsonwebtoken');

const generateJwt = ({ email }) => {
  if (email) {
    return jwt.sign({ email }, process.env.JWT_SECRET);
  }

  return null;
}

module.exports = generateJwt;