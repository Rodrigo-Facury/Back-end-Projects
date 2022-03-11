const { StatusCodes } = require('http-status-codes');

module.exports = (req, res, next) => {
  try {
    const { password } = req.body;
    
    if (password === null || password === undefined) {
      return res.status(StatusCodes.BAD_REQUEST).json({ 
        message: '"password" is required',  
      });
    }

    if (password.length === 0) {
      return res.status(StatusCodes.BAD_REQUEST).json({ 
        message: '"password" is not allowed to be empty',  
      });
    }

    next();
  } catch (err) {
    next(err);
  }
};