const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const Users = require('../users/users-model.js');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  console.log(req.headers);
  console.log(token);

  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (error, decodedToken) => {
      if (error) {
        res.status(401).json({ message: 'Invalid credential.' })
      } else {
        // req.decodedJwt = decodedToken;

        next();
      }
    });
  } else {
    res.status(401).json({ message: 'No token provided.' });
  }
};