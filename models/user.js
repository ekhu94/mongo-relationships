const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/relationshipDB', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', () => {
  console.log('Database connected');
});

const userSchema = new Schema({
  first: String,
  last: String,
  addresses: [
    {
      street_address: String,
      city: String,
      state: String,
      zip_code: Number,
    },
  ],
});

module.exports = mongoose.model('User', userSchema);
