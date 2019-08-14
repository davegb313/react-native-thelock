const express = require('express');
const app = express();
const port = process.env.PORT || 4000;

const calculateHash = require('./hash');

app.use(express.json());

let users = [
  {
    email: 'dave@dave.dave',
    password: 'deaddog',
  },
  {
    email: 'nik@dave.dave',
    password: 'deaddog',
  },
  {
    email: 'dead',
    password: 'dead',
  },
];

app.post('/login', (req, res) => {
  const correctUser = users.filter(
    user =>
      user.email === req.body.email && user.password === req.body.password,
  );
  if (correctUser.length) {
    return res.json({message: 'yeeeah'});
  } else {
    return res.status(401).json({message: 'log in failed'});
  }
});



app.listen(port, () => console.log(`example on port ${port}`));
