const express = require('express');
const mongoose = require('mongoose');

const User = require('./models/user');

mongoose.connect('mongodb://localhost:27017/relationshipDB', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connection open');
});

const app = express();

const createUser = async () => {
  const user = new User({
    first: 'Kiryu',
    last: 'Kazuma',
  });
  const res = await user.save();
  console.log(res);
};

const addAddress = async (id) => {
  const user = await User.findById(id);
  user.addresses.push({
    street_address: 'Kamurocho Hills',
    city: 'Tokyo',
    state: 'Tokyo',
    zip_code: 011888,
  });
  const res = await user.save();
  console.log(res);
};

addAddress('608f07fa2f4ea81e88ab11f9').then(() => mongoose.connection.close());
