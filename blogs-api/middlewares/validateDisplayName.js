const { StatusCodes } = require('http-status-codes');

const MIN_DISPLAY_NAME_LENGTH = 8;

module.exports = (req, res, next) => {
  try {
    const { displayName } = req.body;

    if (!displayName) {
      return res.status(StatusCodes.BAD_REQUEST).json({ 
        message: '"displayName" is required',  
      });
    }

    if (displayName.length < MIN_DISPLAY_NAME_LENGTH) {
      return res.status(StatusCodes.BAD_REQUEST).json({ 
        message: '"displayName" length must be at least 8 characters long',  
      });
    }

    next();
  } catch (err) {
    next(err);
  }
};