let app = require('express')();
let request = require('request');
let cors = require('cors');

app.use(cors());

app.get('/', (req, res) => {
  res.send('Hello');
});

app.get('/leagues/:id', (req, res) => {
  request(
    `https://api.eslgaming.com/play/v1/leagues/${req.params.id}`,
    {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    (err, data, body) => {
      if (err) {
        res.json(err);
      } else {
        res.json(body);
      }
    }
  );
});

app.get('/leagues/:id/results', (req, res) => {
  request(
    `https://api.eslgaming.com/play/v1/leagues/${req.params.id}/results`,
    {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    (err, data, body) => {
      if (err) {
        res.json(err);
      } else {
        res.json(body);
      }
    }
  );
});

app.get('/leagues/:id/contestants', (req, res) => {
  request(
    `https://api.eslgaming.com/play/v1/leagues/${req.params.id}/contestants`,
    {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    (err, data, body) => {
      if (err) {
        res.json(err);
      } else {
        res.json(body);
      }
    }
  );
});

app.get('/leagues', (req, res) => {
  request(
    `https://api.eslgaming.com/play/v1/leagues`,
    {
      'Access-Control-Allow-Origin': '*',
      'Content-Type': 'application/x-www-form-urlencoded',
    },
    (err, data, body) => {
      if (err) {
        res.json(err);
      } else {
        res.json(body);
      }
    }
  );
});

app.listen(process.env.PORT || 5000, () => {
  console.log('Server is listening at port 4000');
});
