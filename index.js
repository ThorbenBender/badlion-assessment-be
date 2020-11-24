let app = require('express')();
let axios = require('axios');

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/leagues/:id', async (req, res) => {
  try {
    let data = await request(
      `https://api.eslgaming.com/play/v1/leagues/${req.params.id}`,
      {
        'Access-Control-Allow-Origin': '*',
        'Content-Type': 'application/x-www-form-urlencoded',
      }
    );
    res.json(data);
  } catch (err) {}
});

app.listen(5000, () => {
  console.log('Server is listening at port 4000');
});
