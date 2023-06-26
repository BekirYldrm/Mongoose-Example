
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

const kiwi = new fruitModel({
    name : "kiwi",
    rating : 10 , 
    review : "The best fruit!"
});

const banana = new fruitModel({
    name : "banana",
    rating : 8 , 
    review : "Good fruit"
});
const orange = new fruitModel({
    name : "orange",
    rating : 9 , 
    review : "Very delicius fruit"
});

fruitModel.insertMany([kiwi , banana , orange]).then(function(){
    console.log("Successfuly saved all the fruits to fruitsDB");  //Success
}).catch(function(err){
    console.log(err);
});


