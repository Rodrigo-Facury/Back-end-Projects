const { StatusCodes } = require('http-status-codes');
const jwt = require('jsonwebtoken');
const { User } = require('../models');

const SECRET = 'mypowerfulsecret';

module.exports = async (req, res, next) => {
  const token = req.headers.authorization;

  if (!token) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Token not found' });
  }

  try {
    const decoded = jwt.verify(token, SECRET);
    const foundUser = await User.findOne({ where: { email: decoded.email } });

    if (!foundUser) {
      return res
        .status(StatusCodes.UNAUTHORIZED).json({ message: 'User not found' });
    }

    const { password, ...userWithoutPassword } = foundUser.dataValues;

    req.user = userWithoutPassword;

    next();
  } catch (err) {
    return res.status(StatusCodes.UNAUTHORIZED).json({ message: 'Expired or invalid token' });
  }
};