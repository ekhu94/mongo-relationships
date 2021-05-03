const mongoose = require('mongoose');
const { Schema } = mongoose;

mongoose.connect('mongodb://localhost:27017/relationshipDB', {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const letterSchema = new Schema({
  subject: String,
  content: String,
  user: { type: Schema.Types.ObjectId, ref: 'User' },
});

module.exports = mongoose.model('Letter', letterSchema);
