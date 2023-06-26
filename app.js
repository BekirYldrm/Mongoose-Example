
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


const humanSchema = new mongoose.Schema({
    name: String,
    age : Number
});

const humanModel = mongoose.mongoose.model("Human" , humanSchema);

const human = new humanModel ({
    name : "John" , 
    age : 37
});
human.save();

