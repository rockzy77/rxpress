const express = require("express");
const {getAllProducts, createProduct, deleteProduct} = require("../controller/productController");

const router = express.Router();

const upload = require('../config/multerConfig');
const { adminVerification } = require("../middleware/adminVerification");


router.get("/getAllProducts", adminVerification, getAllProducts);

router.post("/createProduct", adminVerification,upload.fields([
    {name: 'pdImg1'},
    {name: 'pdImg2'},
    {name: 'pdImg3'},
    {name: 'pdImg4'},
]), createProduct);


router.delete("/deleteProduct/:id", adminVerification, deleteProduct);


module.exports = router;