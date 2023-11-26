const mongoose = require("mongoose");
const DefaultMember = require("./models/defaultMember"); // Adjust the path accordingly
const DefaultParkingSlot = require("./models/parkingSlot");
const tempMember = require('./models/tempMember')
    const defaultStartDate = new Date("2023-01-01");
const defaultEndDate = new Date("2023-12-31");
    



// Establish a connection to the database
mongoose
  .connect("mongodb://127.0.0.1:27017/kpi_parking", {
    useNewUrlParser: true,
  })
  .then(() => {
    console.log("Connected to the database");

      

    // Example default members data
      DefaultMember.find().then((defaultMembers) => {
        // Create default parking slots using the _id of each default member
        const defaultMembersData = defaultMembers.map((member) => ({
          slotName: "S1", // Use a unique identifier for each slot
          defaultPerson: member._id,
          tempPerson: null, // Assuming tempPerson is initially null
          status: "Occupied",
        }));

        // Insert default members into the MongoDB collection
        DefaultParkingSlot.insertMany(defaultMembersData)
          .then(() => {
            console.log("Default members inserted successfully");
          })
          .catch((error) => {
            console.error("Error inserting default members:", error);
          })
          .finally(() => {
            // Close the database connection after seeding
            mongoose.connection.close();
          });
      });
  })
  .catch((error) => {
    console.error("Error connecting to the database:", error);
  });
