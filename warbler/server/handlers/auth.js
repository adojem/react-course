const jwt = require('jsonwebtoken');
const db = require('../models');

exports.signin = async (req, res, next) => {
   try {
      const user = await db.User.findOne({
         email: req.body.email,
      });
      const isMatch = await user.comparePassword(req.body.password);

      if (!isMatch) {
         return next({
            status: 400,
            message: 'Invalid Email/Password.',
         });
      }

      const { id, username, profileImageUrl } = user;
      const token = jwt.sign(
         {
            id,
            username,
            profileImageUrl,
         },
         process.env.SECRET_KEY,
      );

      return res.status(200).json({
         id,
         username,
         profileImageUrl,
         token,
      });
   }
   catch (err) {
      return next({
         status: 400,
         message: 'Invalid Email/Password',
      });
   }
};

exports.signup = async (req, res, next) => {
   try {
      const user = await db.User.create(req.body);
      const { id, username, profileImageUrl } = user;
      const token = jwt.sign(
         {
            id,
            username,
            profileImageUrl,
         },
         process.env.SECRET_KEY,
      );

      return res.status(200).json({
         id,
         username,
         profileImageUrl,
         token,
      });
   }
   catch (err) {
      // if a validation fails
      if (err.code === 11000) {
         err.message = 'Sorry, that username and/or email is taken';
      }

      return next({
         status: 400,
         message: err.message,
      });
   }
};
