const express = require('express');

//setup express app
const app = express();

app.get("/api",function(req,res){

  console.log('Get Request');
  res.send({
    name:'Sadikul',
    designation:'Android developer'
  });
  res.end();
});

//listen for requests
app.listen(process.env.port || 4000,function(){
    console.log('Now listening for requests');
});
