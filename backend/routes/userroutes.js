const express = require("express");
const { getUsers, auth, getAuthInfo, deleteUser } = require("../controller/userController");
const { adminVerification } = require("../middleware/adminVerification");

const router = express.Router();


router.get("/getAllUsers", adminVerification,getUsers);

router.post("/auth", auth);

router.post("/changePassword", ()=>{});

router.get("/getAuthInfo", getAuthInfo);

router.delete("/deleteUser/:id", adminVerification, deleteUser);


module.exports = router;