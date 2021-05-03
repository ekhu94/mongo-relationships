const express = require('express');
const mongoose = require('mongoose');

const User = require('./models/user');
const Letter = require('./models/letter');
const Farm = require('./models/farm');
const Product = require('./models/product');

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

// const app = express();

// const createUser = async () => {
//   const user = new User({
//     first: 'Kiryu',
//     last: 'Kazuma',
//   });
//   const res = await user.save();
//   console.log(res);
// };

// const addAddress = async (id) => {
//   const user = await User.findById(id);
//   user.addresses.push({
//     street_address: 'Kamurocho Hills',
//     city: 'Tokyo',
//     state: 'Tokyo',
//     zip_code: 011888,
//   });
//   const res = await user.save();
//   console.log(res);
// };

const writeLetter = async () => {
  const user = await User.findOne({ first: 'Kiryu' });
  const letter = new Letter({
    subject: 'Saving ARA-Q3',
    content:
      'Akio got his game stolen by a gang goomba so I tracked the rat down.',
  });
  letter.user = user;
  await user.save();
  await letter.save();
};

const showLetter = async () => {
  const letter = await Letter.findOne({ subject: 'Saving ARA-Q3' }).populate(
    'user'
  );
  console.log(letter);
};

// const createStardew = async () => {
//   const farm = new Farm({
//     name: 'Mikasa Ranch',
//     city: 'Stardew Valley',
//     size: 'medium',
//   });
//   await farm.save();
//   console.log(farm);
// };

// const buyNewProduct = async (productName) => {
//   const farm = await Farm.findOne({ name: 'Mikasa Ranch' });
//   const product = await Product.findOne({ name: productName });
//   farm.products.push(product);
//   await farm.save();
//   console.log(farm);
// };

// const showFarmWithProducts = async (farmName) => {
//   const farm = await Farm.findOne({ name: farmName })
//     .populate('products')
//     .then((farm) => console.log(farm));
// };

showLetter();
