const { StatusCodes } = require('http-status-codes');
const { User } = require('../models');

module.exports = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const userAlreadyExists = await User.findOne({ where: { email, password } }); 

    if (!userAlreadyExists) {
      return res.status(StatusCodes.BAD_REQUEST).json({ 
        message: 'Invalid fields',
      });
    }

    next();
  } catch (err) {
    next(err);
  }
};