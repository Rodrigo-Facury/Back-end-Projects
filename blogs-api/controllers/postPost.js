const { StatusCodes } = require('http-status-codes');
const { BlogPost, PostsCategory } = require('../models');

module.exports = async (req, res, next) => {
  try {
    const { categoryIds, ...postWithoutCategoryIds } = req.body;
    const { id } = req.user;

    const post = { ...postWithoutCategoryIds, userId: id };
    
    await BlogPost.create(post);

    const createdPost = await BlogPost.findOne({ where: { title: post.title } });

    categoryIds.forEach(async (categoryId) => {
      const postCategory = { categoryId, postId: createdPost.id };
      await PostsCategory.create(postCategory);
    });

    return res.status(StatusCodes.CREATED).json(createdPost);
  } catch (err) {
    next(err);
  }
};