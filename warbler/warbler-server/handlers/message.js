const db = require('../models');

exports.createMessage = async (req, res, next) => {
   try {
      const message = await db.Message.create({
         text: req.body.text,
         user: req.params.id,
      });
      const foundUser = await db.User.findById(req.params.id);
      foundUser.messages.push(message.id);
      await foundUser.save();
      const foundMessage = await db.Message.findById(message._id).populate(
         'user',
         {
            username: true,
            profileImageUrl: true,
         }
      );
      return res.status(200).json(foundMessage);
   } catch (err) {
      return next(err);
   }
};

exports.getMessage = async (req, res, next) => {};

exports.deleteMessage = async (req, res, next) => {};
