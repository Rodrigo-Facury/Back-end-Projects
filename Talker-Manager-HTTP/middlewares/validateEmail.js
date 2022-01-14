const validateEmail = (req, res, next) => {
  const { email } = req.body;
  const checkEmail = /(.+)@(.+){2,}\.(.+){2,}/;
  // regex de validação encontrado no seguinte link: https://stackoverflow.com/questions/4964691/super-simple-email-validation-with-javascript;
  const validEmail = checkEmail.test(email);

  if (!email || email === '') {
    return res.status(400).json({
      message: 'O campo "email" é obrigatório',
    });
  }

  if (!validEmail) {
    return res.status(400).json({
      message: 'O "email" deve ter o formato "email@email.com"',
    });
  }

  next();
};

module.exports = validateEmail;
