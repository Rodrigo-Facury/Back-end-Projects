const doesUserExist = require('./doesUserExist');
const validateDisplayName = require('./validateDisplayName');
const validateEmail = require('./validateEmail');
const validatePassword = require('./validatePassword');
const validateToken = require('./validateToken');
const validateLoginEmail = require('./validateLoginEmail');
const validateLoginPassword = require('./validateLoginPassword');
const doesLoginMatch = require('./doesLoginMatch');
const validateCategoryName = require('./validateCategoryName');
const validatePostCategoryIds = require('./validatePostCategoryIds');
const validatePostContent = require('./validatePostContent');
const validatePostTitle = require('./validatePostTitle');

module.exports = {
  doesUserExist,
  validateDisplayName,
  validateEmail,
  validatePassword,
  validateToken,
  validateLoginEmail,
  validateLoginPassword,
  doesLoginMatch,
  validateCategoryName,
  validatePostCategoryIds,
  validatePostContent,
  validatePostTitle,
};