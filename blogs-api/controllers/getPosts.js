const { StatusCodes } = require('http-status-codes');
const { BlogPost, User, Category } = require('../models');

module.exports = async (_req, res, next) => {
  try {
    const posts = await BlogPost.findAll({
      include: [{ model: User, as: 'user' },
      { model: Category, as: 'categories', through: { attributes: [] } }],
    });
    return res.status(StatusCodes.OK).json(posts);
  } catch (err) {
    next(err);
  }
};