const { StatusCodes } = require('http-status-codes');
const { Category } = require('../models');

let notFoundCategories = false;

module.exports = async (req, res, next) => {
  try {
    const { categoryIds } = req.body;
    
    if (!categoryIds) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: '"categoryIds" is required' });
    }

    const arrayCategoryIds = [...categoryIds];

    const categories = await Promise.all(arrayCategoryIds.map(async (id) => {
      const foundCategory = await Category.findOne({ where: { id } });

      return foundCategory;
    }));

    if (categories.some((category) => category === null)) notFoundCategories = true;

    if (notFoundCategories) {
      return res.status(StatusCodes.BAD_REQUEST).json({ message: '"categoryIds" not found' });
    } 

    next();
  } catch (err) {
    next(err);
  }
};