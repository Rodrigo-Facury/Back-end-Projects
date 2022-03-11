const { StatusCodes } = require('http-status-codes');
const { User } = require('../models');
const { createToken } = require('../services');

module.exports = async (req, res, next) => {
  try {
    const user = req.body;
    
    await User.create(user);

    const token = createToken(user);

    return res.status(StatusCodes.CREATED).json({ token });
  } catch (err) {
    next(err);
  }
};