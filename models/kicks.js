const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kickSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    size:{
      type: Number,
      required: true
    },
    resell:{
        type: Number,
        required: true
      },
    retail:{
        type: Number,
        required: true
      },
    worn: {
      type: Boolean,
      default: false
    },
    description:{
        type: String,
        required: false
      },
  }, {
    timestamps: true
  })

const Kick = mongoose.model('Kick', kickSchema)
module.exports = Kick;