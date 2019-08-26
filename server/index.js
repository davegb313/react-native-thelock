const express = require('express');
const app = express();
const port = process.env.PORT || 4000;
const jwt = require('jsonwebtoken');

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
  const passwordHash = calculateHash(req.body.password);
  const correctUser = users.filter(
    user =>
      user.email === req.body.email && user.password === passwordHash,
  );
  if (correctUser.length) {
    jwt.sign(
           'jwt secret code',
           { email: correctUser.dataValues.email}, 
           (err,token)=>res.json({token})
    );
    return res.json({message: 'yeeeah'});
  } else {
    return res.status(401).json({message: 'log in failed'});
  }
});

app.post('/signup', (req, res) => {
    const passwordHash = calculateHash(req.body.password);
    ifExist = users.filter(user=> user.email === req.body.email);

    if (!ifExist.length) {
    users.push({
      email: req.body.email,
      password: passwordHash,
    },);
    return res.json({message: 'user created'});
  } else {
    return res.status(401).json({message: 'sign up failed'});
  }
});

app.listen(port, () => console.log(`example on port ${port}`));
