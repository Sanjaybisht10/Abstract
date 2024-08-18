const mongoose = require('mongoose');
const mongooseSequence = require('mongoose-sequence')(mongoose);

const cardSchema = new mongoose.Schema({
  title: {
    type:String,
    require:true
  },
  description: {
    type:String,
    require:true
  }
});

cardSchema.plugin(mongooseSequence, { inc_field: 'id' });

const Card = mongoose.model('Card', cardSchema);

module.exports = Card;
