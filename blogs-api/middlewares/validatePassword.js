const { StatusCodes } = require('http-status-codes');

const MIN_PASSWORD_LENGTH = 6;

module.exports = (req, res, next) => {
  try {
    const { password } = req.body;
    
    if (!password) {
      return res.status(StatusCodes.BAD_REQUEST).json({ 
        message: '"password" is required',  
      });
    }

    if (password.length < MIN_PASSWORD_LENGTH) {
      return res.status(StatusCodes.BAD_REQUEST).json({ 
        message: '"password" length must be 6 characters long',  
      });
    }

    next();
  } catch (err) {
    next(err);
  }
};