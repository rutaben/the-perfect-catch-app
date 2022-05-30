const bcrypt = require('bcrypt');
const saltRounds = 10;

const hashAndSaltPassword = async (password) => await bcrypt.hash(password + HASH_SECRET, saltRounds);

const comparePasswords = async (plainTextPassword, hashedPassword) => {

    return bcrypt.compare(plainTextPassword + HASH_SECRET, hashedPassword);
};

module.exports = {
    hashAndSaltPassword,
    comparePasswords
}