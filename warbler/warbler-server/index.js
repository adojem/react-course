const express = require('express');
const cors = require('cors');
const errorHandler = require('./handlers/error');

const app = express();

const PORT = 8081;

app.use(cors());
app.use(express.json());

app.use((req, res, next) => {
   const err = new Error('Not Found');
   err.status = 404;
   next(err);
});

app.use(errorHandler);

app.listen(PORT, () => {
   console.log(`Server is starting on port ${PORT}`);
});
