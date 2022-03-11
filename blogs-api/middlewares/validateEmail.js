const { StatusCodes } = require('http-status-codes');

const checkEmail = /(.+)@(.+){2,}\.(.+){2,}/;
    // regex de validação encontrado no seguinte link: https://stackoverflow.com/questions/4964691/super-simple-email-validation-with-javascript;

module.exports = (req, res, next) => {
  try {
    const { email } = req.body;
    
    if (!email) {
      return res.status(StatusCodes.BAD_REQUEST).json({ 
        message: '"email" is required',  
      });
    }

    const validEmail = checkEmail.test(email);

    if (!validEmail) {
      return res.status(StatusCodes.BAD_REQUEST).json({ 
        message: '"email" must be a valid email',  
      });
    }

    next();
  } catch (err) {
    next(err);
  }
};