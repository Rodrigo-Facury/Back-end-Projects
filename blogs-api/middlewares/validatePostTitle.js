const { StatusCodes } = require('http-status-codes');

module.exports = (req, res, next) => {
  try {
    const { title } = req.body;

    if (!title) {
      return res.status(StatusCodes.BAD_REQUEST).json({ 
        message: '"title" is required',  
      });
    }

    next();
  } catch (err) {
    next(err);
  }
};