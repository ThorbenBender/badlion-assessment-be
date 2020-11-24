let app = require('express')();
let request = require('request');

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/league/:id', async (req, res) => {
  res.send('Hello');
});

app.listen(5000, () => {
  console.log('Server is listening at port 4000');
});
