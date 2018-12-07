require('dotenv').config();
const express = require('express');
const cors = require('cors');
// handlers
const errorHandler = require('./handlers/error');
const { getAllMessages } = require('./handlers/messages');
// routes
const authRoutes = require('./routes/auth');
const messagesRoutes = require('./routes/messages');
// middleware
const { loginRequired, ensureCorrectUser } = require('./middleware/auth');

const PORT = 8081;

const app = express();

app.use(cors());
app.use(express.json());

// mount routes
app.use('/api/auth', authRoutes);
app.use('/api/users/:id/messages', loginRequired, ensureCorrectUser, messagesRoutes);
app.use('/api/messages', loginRequired, getAllMessages);

app.use((req, res, next) => {
   const err = new Error('Not Found');
   err.status = 404;
   next(err);
});

app.use(errorHandler);

app.listen(PORT, () => {
   console.log(`Server is starting on port ${PORT}`);
});
