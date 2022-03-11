const { StatusCodes } = require('http-status-codes');

module.exports = (req, res, next) => {
  try {
    const { email } = req.body;
    
    if (email === null || email === undefined) {
      return res.status(StatusCodes.BAD_REQUEST).json({ 
        message: '"email" is required',  
      });
    }

    if (email.length === 0) {
      return res.status(StatusCodes.BAD_REQUEST).json({ 
        message: '"email" is not allowed to be empty',  
      });
    }

    next();
  } catch (err) {
    next(err);
  }
};