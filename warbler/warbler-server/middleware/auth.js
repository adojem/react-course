require('dotenv').load();
const jwt = require('jsonwebtoken');

exports.loginRequired = (req, res, next) => {
   try {
      const token = req.heeaders.authorization.split(' ')[1];
      jwt.verity(token, process.env.SECRET_KEY, (err, decoded) => {
         if (decoded) {
            return next();
         }
         return next({
            status: 401,
            message: 'Please log in first',
         });
      });
   } catch (err) {
      return next({
         status: 401,
         message: 'Please log in first',
      });
   }
};

exports.loginRequired = (req, res, next) => {};
