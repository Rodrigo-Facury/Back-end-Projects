const { StatusCodes } = require('http-status-codes');
const { User } = require('../models');

module.exports = async (req, res, next) => {
  try {
    const { email } = req.body;
    const userAlreadyExists = await User.findOne({ where: { email } }); 

    if (userAlreadyExists) {
      return res.status(StatusCodes.CONFLICT).json({ 
        message: 'User already registered',  
      });
    }

    next();
  } catch (err) {
    next(err);
  }
};