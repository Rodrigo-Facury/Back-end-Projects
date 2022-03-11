const { StatusCodes } = require('http-status-codes');

module.exports = (req, res, next) => {
  try {
    const { name } = req.body;

    if (!name) {
      return res.status(StatusCodes.BAD_REQUEST).json({ 
        message: '"name" is required',
      });
    }

    next();
  } catch (err) {
    next(err);
  }
};