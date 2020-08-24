const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const kickSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  resell: {
    type: Number,
    required: true
  },
  retail: {
    type: Number,
    required: true
  },
  deadstock: {
    type: Boolean,
    default: false
  },
  worn: {
    type: Boolean,
    default: false
  },
  description: {
    type: String,
    required: true
  },
  image: {
    type: String,
    required: true
  },
  
}, {
  timestamps: true
})


// kickSchema.aggregate(
//   {
//     $group: {
//         _id: null,
//         total: {
//             $sum: "$resell"
//         }
//     }
// }
// )

const Kick = mongoose.model('Kick', kickSchema)
module.exports = Kick;