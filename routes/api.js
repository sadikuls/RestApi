const express = require('express');

const router = express.Router();


//get the link from ninjas list
router.get("/ninjas",function(req,res){

    //console.log('Get Request');
    //return value on api call
    res.send({
        type:'GET'
    });
    res.end();
});

//insert the item to ninjas list
router.post("/ninjas",function(req,res){

    //console.log('Get Request');
    //return value on api call\
    //console.log(req.body);
    res.send({
        type:'POST',
        details:{
            name:req.body.name,
            designation:req.body.designation
        }
    });


    res.end();
});

//update the item to ninjas list
router.put('/ninjas/:id',function(req,res){

    //console.log('Get Request');
    //return value on api call
    res.send({
        type:'PUT'
    });
    res.end();
});

//delete the item from ninjas list
router.delete('/ninjas/:id',function(req,res){

    //console.log('Get Request');
    //return value on api call
    res.send({
        type:'DELETE'
    });
    res.end();
});

module.exports = router;