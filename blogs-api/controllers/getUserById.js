const { StatusCodes } = require('http-status-codes');
const { User } = require('../models');

module.exports = async (req, res, next) => {
  try {
    const { id } = req.params;
    const idNumber = parseInt(id, 10);
    const foundUser = await User.findOne({ where: { id: idNumber } });

    if (!foundUser) {
      return res.status(StatusCodes.NOT_FOUND).json({ message: 'User does not exist' });
    }

    const { dataValues } = foundUser;

    const { password, ...userWithoutPassword } = dataValues;

    return res.status(StatusCodes.OK).json(userWithoutPassword);
  } catch (err) {
    next(err);
  }
};