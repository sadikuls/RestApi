const mongoose = require('mongoose');

const Schema = mongoose.Schema;


//create a json schema what as a blueprint of model class
const NinjaSchema = new Schema({
    name:{
        type : String,
        //this filed can not be empty
        required:[true,"name is required"]
    },
    rank:{
        type : String
    },
    email:{
        type : String
    },
    available:{
        type : Boolean,
        //if api send empty field then it will set to false by default
        default : false
    }
});


//create ninza model class
const Ninja = mongoose.model('ninja',NinjaSchema);

//export ninjamodel
module.exports = Ninja;