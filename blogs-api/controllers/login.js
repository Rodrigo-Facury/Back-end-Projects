const { StatusCodes } = require('http-status-codes');
const { createToken } = require('../services');

module.exports = async (req, res, next) => {
  try {
    const user = req.body;

    const token = createToken(user);

    return res.status(StatusCodes.OK).json({ token });
  } catch (err) {
    next(err);
  }
};