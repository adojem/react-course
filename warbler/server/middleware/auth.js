require('dotenv').load();
const jwt = require('jsonwebtoken');

// make sure the user is logged - Authentication
exports.loginRequired = (req, res, next) => {
   try {
      const token = req.headers.authorization.split(' ')[1];
      jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
         if (decoded) {
            return next();
         }
         return next({
            status: 401,
            message: 'Please log in first',
         });
      });
   }
   catch (err) {
      return next({
         status: 401,
         message: 'Please log in first',
      });
   }
};

// make sure we get the correct user - Authorization
exports.ensureCorrectUser = (req, res, next) => {
   try {
      const token = req.headers.authorization.split(' ')[1];
      jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
         if (decoded && decoded.id === req.params.id) {
            return next();
         }
         return next({
            status: 401,
            message: 'Unauthorized',
         });
      });
   }
   catch (err) {
      return next({
         status: 401,
         message: 'Unauthorized',
      });
   }
};
