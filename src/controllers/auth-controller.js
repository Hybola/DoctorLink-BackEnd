
const createError = require("../utils/create-error");
exports.register = async (req, res, next) => {
  try {

    res.status(200).json({message:" test response to postman"});
  } catch (err) {
    next(err);
  }
};
exports.login = async (req, res, next) => {
  try {
    res.status(200).json({message:" test response to postman"});
  } catch (err) {
    next(err);
  }
};

exports.getMe = (req, res, next) => {
  res.status(200).json({ user: req.user });
};