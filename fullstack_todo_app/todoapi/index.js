const express = require('express'),
   app = express(),
   port = process.env.PORT || 3000;

const todoRoutes = require('./routes/todos');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
   res.send('Hello from the root rute');
});

app.use('/api/todos', todoRoutes);

app.listen(port, () => {
   console.log('App is running on port ' + port);
});
