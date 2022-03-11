const { StatusCodes } = require('http-status-codes');
const { Category } = require('../models');

module.exports = async (_req, res, next) => {
  try {
    const categories = await Category.findAll();
    return res.status(StatusCodes.OK).json(categories);
  } catch (err) {
    next(err);
  }
};