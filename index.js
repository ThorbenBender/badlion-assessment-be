let app = require('express')();

app.get('/', (req, res) => {
  res.send('Hello');
});

app.listen(4000, () => {
  console.log('Server is listening at port 4000');
});
