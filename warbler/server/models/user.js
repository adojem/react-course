const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const userSchema = new mongoose.Schema({
   email: {
      type: String,
      required: true,
      unique: true,
   },
   username: {
      type: String,
      required: true,
      unique: true,
   },
   password: {
      type: String,
      required: true,
   },
   rpfileImageUrl: {
      type: String,
   },
});

userSchema.pre('save', async (next) => {
   try {
      if (!this.isModified('password')) {
         return next();
      }
      const hasedPassword = await bcrypt.hash(this.password, 10);
      this.password = hasedPassword;
      return next();
   }
   catch (err) {
      return next(err);
   }
});

userSchema.method.comparePassword = async (candidatePassword, next) => {
   try {
      const isMatch = await bcrypt.compare(candidatePassword, this.password);
      return isMatch;
   }
   catch (err) {
      return next(err);
   }
};

const User = mongoose.model('User', userSchema);

module.exports = User;
