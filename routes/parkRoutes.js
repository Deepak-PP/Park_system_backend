const cookieParser = require("cookie-parser");
const { Router } = require("express");

const parkRoutes = Router();
parkRoutes.use(cookieParser());

const memberControl = require("../controller/memberControl");

parkRoutes.get("/defaultMembersList", memberControl.getDefaultMembers);
parkRoutes.get("/parkSlotsData", memberControl.getparkSlotsData);
parkRoutes.post("/temporaryLeave", memberControl.temporaryLeaveAdd);
parkRoutes.post("/temporaryPerson",memberControl.temporaryPersonAdd);


module.exports = parkRoutes;
