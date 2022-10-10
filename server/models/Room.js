const mongoose = require('mongoose')

const RoomSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true
  },
  price: {
    type: Number,
    required: true,
  },
  maxPeople: {
    type: Number,
    required: true
  }, 
  desc: {
    type: String,
    required: true
  },
  photos: [String],
  roomNumbers: [{ numbers: Number, unavailableDates: {type: [Date]}}]
}, { timestamps: true}
)

module.exports = mongoose.model('Room', RoomSchema)