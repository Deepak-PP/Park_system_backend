const mongoose = require("mongoose");

const tempMemberSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  start_date: {
    type: Date,
    required: true,
  },
  end_date: {
    type: Date,
    required: true,
    },
  parkSlot: {
    type:String,
    required: true,
    },

  status: {
    type: String,
      required: true,
    default:"Temporarly Occupied"
  },
});

module.exports = mongoose.model("tempMember", tempMemberSchema);
