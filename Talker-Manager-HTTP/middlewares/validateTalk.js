const validateTalk = (req, res, next) => {
  const { talk } = req.body;
  const { watchedAt, rate } = talk;
  const checkDate = /^(0?[1-9]|[12][0-9]|3[01])[/-](0?[1-9]|1[012])[/-]\d{4}$/;
  const validDate = checkDate.test(watchedAt);
  const checkRate = rate === parseInt(rate, 10);

  if (!validDate) {
    return res.status(400).json({
      message: 'O campo "watchedAt" deve ter o formato "dd/mm/aaaa"',
    });
  }

  if (!checkRate || rate < 1 || rate > 5) {
    return res.status(400).json({
      message: 'O campo "rate" deve ser um inteiro de 1 à 5',
    });
  }
  next();
};

module.exports = validateTalk;
