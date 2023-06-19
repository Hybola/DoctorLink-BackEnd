const bcrypt = require("bcryptjs");
exports.hash = (password) => bcrypt.hash(password, +process.env.HASH_SALT);
exports.compare = (password, hashedPassword) =>
  bcrypt.compare(password, hashedPassword);
