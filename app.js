const express = require("express");
require("dotenv").config();
const app = express();
const db = require("./query");
const bodyparser = require("body-parser")

app.use(bodyparser.urlencoded({ extended: true })); 
app.use(bodyparser.json());

  app.use("/",require("./routes"));

  app.listen(3000,function(){
    console.log(`server running on port 3000`);
  })