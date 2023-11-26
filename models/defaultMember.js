const mongoose = require("mongoose");

const defaultMemberSchema = new mongoose.Schema({
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

  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("defaultMember", defaultMemberSchema);
