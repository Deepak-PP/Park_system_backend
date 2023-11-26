const defaultMember = require('../models/defaultMember')
const parkingSlot = require("../models/parkingSlot");
const tempMember = require('../models/tempMember');


const getDefaultMembers = async(req, res) => { 
    try {
        console.log("is it here");
        const defaultMembersData = await parkingSlot.find();
        
        res.json(defaultMembersData)
        
    } catch (error) {
        console.log(error);
        
    }
}

const getparkSlotsData = async (req, res) => { 
    try {
        const parkSlotData = await parkingSlot
          .find()
          .populate("defaultPerson")
          .populate("tempPerson");
        console.log(parkSlotData);

        res.json(parkSlotData);
        
    } catch (error) {
        console.log(error);
        
    }
}

const temporaryLeaveAdd = async (req, res) => { 
    try {
        const formData = req.body
        const slotName = formData.slotName
        console.log(formData, "formdata at backend");

        const updatedLeaveDate = await parkingSlot.findOneAndUpdate(
          { slotName: slotName },
          {
            $set: {
              leaveStartDate: formData.startDate,
              leaveEndDate: formData.endDate,
            },
          },
          { new: true }
        );
        res.status(200).json({message:"leave dates updated"})

        
    } catch (error) {
        console.error("Error updating parking slot:", error);
        res.status(500).json({ error: "Internal Server Error" });
        
    }

}

const temporaryPersonAdd = async (req, res) => { 
    try {
        const formData = req.body
        console.log(formData);
        const temporaryPersonData = new tempMember({
          name: formData.tempPersonName,
          start_date: formData.startDateTemp,
          end_date: formData.endDateTemp,
          parkSlot: formData.slotName,
        });
        await temporaryPersonData.save()

        const updatedParkingSlot = await parkingSlot.findOneAndUpdate(
          { slotName: formData.slotName },
          { tempPerson: temporaryPersonData._id },
          { new: true }
        );

          res.status(200).json({ message: "Temporary person added" });

        
    } catch (error) {
        console.log(error);
        
    }
}

module.exports = {
  getDefaultMembers,
  getparkSlotsData,
  temporaryLeaveAdd,
  temporaryPersonAdd,
};