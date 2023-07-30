const express = require("express");
const router = express.Router();

const controller = require("./controller");


router.post("/insertMany",async function(req,res){
        const data = req.body;
        controller.insertMany(data.collection,req.body.data).then(function(result){
            res.send(result);
        }).catch(function(err){
            res.send(err)
        })
    
})


module.exports = router;

