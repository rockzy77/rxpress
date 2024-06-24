const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const userRoutes = require("./routes/userroutes");
const productRoutes = require("./routes/productroutes");
const PORT = 8000;
const db = require("./config/db");
const multer = require('multer');
const path = require("path");


app.use(express.json());
const corsOptions ={
  origin:'http://localhost:3000', 
  credentials:true,            //access-control-allow-credentials:true
  optionSuccessStatus:200
}
app.use(cors(corsOptions));


const uploadDirectory = path.join(__dirname, 'uploads');
app.use('/uploads', express.static(uploadDirectory));


db.sync({
    force: false
})
  .then(() => {
    console.log('All models were synchronized successfully.');
  })
  .catch((error) => {
    console.error('An error occurred while synchronizing the models:', error);
  });

app.use("/api/", productRoutes);
app.use("/api/", userRoutes);

app.listen(PORT, ()=>{
    console.log("Server is running at port "+PORT);
}); 