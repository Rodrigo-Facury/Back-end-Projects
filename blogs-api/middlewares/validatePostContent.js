const { StatusCodes } = require('http-status-codes');

module.exports = (req, res, next) => {
  try {
    const { content } = req.body;

    if (!content) {
      return res.status(StatusCodes.BAD_REQUEST).json({ 
        message: '"content" is required',  
      });
    }

    next();
  } catch (err) {
    next(err);
  }
};