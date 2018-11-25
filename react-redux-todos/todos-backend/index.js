const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const todoRoutes = require('./routes/todos');

const app = express();

app.use(express.json());
app.use(morgan('tiny'));
app.use(cors());

app.use('/api/todos', todoRoutes);

app.use((req, res, next) => {
   let err = new Error('Not Found');
   err.status = 404;
   next(err);
});

app.use((err, req, res, next) => {
   res.status(err.status || 500);
   res.send({
      message: err.message,
      error: err
   });
});

app.listen(3001, () => {
   console.log('Server starting on port 3001');
});
