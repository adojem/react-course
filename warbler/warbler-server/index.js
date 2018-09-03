require('dotenv').config();
const express = require('express');
const cors = require('cors');
const errorHandler = require('./handlers/error');
const authRoutes = require('./routes/auth');
const messageRoutes = require('./routes/messages');
const { loginRequired, ensureCorrectUser } = require('./middleware/auth');

const app = express();

const db =require('./models');
const PORT = 8081;

app.use(cors());
app.use(express.json());

app.use('/api/auth', authRoutes);
app.use(
   '/api/users/:id/messages',
   loginRequired,
   ensureCorrectUser,
   messageRoutes
);

app.get('/api/messages', loginRequired, async (req, res, next) => {
   try {
      const messages = await db.Message.find()
         .sort({ createdAt: 'desc' })
         .populate('user', {
            username: true,
            profileImageUrl: true,
         });
      return res.status(200).json(messages);
   } catch (err) {
      return next(err);
   }
});

app.use((req, res, next) => {
   const err = new Error('Not Found');
   err.status = 404;
   next(err);
});

app.use(errorHandler);

app.listen(PORT, () => {
   console.log(`Server is starting on port ${PORT}`);
});
