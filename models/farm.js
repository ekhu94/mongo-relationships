const mongoose = require('mongoose');
const Schema = mongoose.Schema;

mongoose.connect('mongodb://localhost:27017/relationshipDB', {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

const farmSchema = new Schema({
  name: String,
  city: String,
  products: [{ type: Schema.Types.ObjectId, ref: 'Product' }],
});

module.exports = mongoose.model('Farm', farmSchema);
