const mongoose = require("mongoose");
const Schema = mongoose.Schema
const parkingSlotSchema = new mongoose.Schema({
  slotName: {
    type: String,
    required: true,
  },
  defaultPerson: {
    type: Schema.Types.ObjectId,
    ref: "defaultMember",
  },
  tempPerson: {
    type: Schema.Types.ObjectId,
    ref: "tempMember",
  },
  leaveStartDate: {
    type: Date,
  },
  leaveEndDate: {
    type: Date,
  },
  status: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model("parkingSlot", parkingSlotSchema);
