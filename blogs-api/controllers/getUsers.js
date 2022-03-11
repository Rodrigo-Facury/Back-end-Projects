const { StatusCodes } = require('http-status-codes');
const { User } = require('../models');

module.exports = async (_req, res, next) => {
  try {
    const users = await User.findAll();
    return res.status(StatusCodes.OK).json(users);
  } catch (err) {
    next(err);
  }
};