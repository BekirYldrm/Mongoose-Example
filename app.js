
const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB");

const fruitSchema = new mongoose.Schema({
    name : String , 
    rating : Number , 
    review : String
});

const fruitModel = mongoose.model("Fruit", fruitSchema);

const fruit = new fruitModel ({
    name : "apple" ,
    rating : 7 , 
    review : "Nice fruit"
});
fruit.save();

