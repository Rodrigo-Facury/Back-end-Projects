const { StatusCodes } = require('http-status-codes');
const { Category } = require('../models');

module.exports = async (req, res, next) => {
  try {
    const { name } = req.body;
    
    await Category.create({ name });

    const createdCategory = await Category.findOne({ where: { name } });

    return res.status(StatusCodes.CREATED).json(createdCategory);
  } catch (err) {
    next(err);
  }
};