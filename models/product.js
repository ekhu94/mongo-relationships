const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/relationshipDB', {
  useUnifiedTopology: true,
  useCreateIndex: true,
  useNewUrlParser: true,
});

const productSchema = new Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ['Spring', 'Summer', 'Fall'],
  },
});

module.exports = mongoose.model('Product', productSchema);
