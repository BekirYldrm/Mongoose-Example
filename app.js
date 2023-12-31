
const mongoose = require("mongoose");

mongoose.connect("mongodb://0.0.0.0:27017/fruitsDB");


const fruitSchema = new mongoose.Schema({
    name : {
        type:String,
        required : [true , "Plase check your data entry, no name specified!"]
    }, 
    rating :{
        type : Number , 
        min:1,  
        max:10
    },
    review : String
});

const humanSchema = new mongoose.Schema({
    name: String,
    age : Number,
    favouriteFruit : fruitSchema
});

const fruitModel = mongoose.model("Fruit", fruitSchema);
const humanModel = mongoose.mongoose.model("Human" , humanSchema);



const apple = new fruitModel ({
    name:"apple",
    rating : 10 , 
    review : "Nice fruit"
});

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
const human = new humanModel ({
    name : "Angela" , 
    age : 25,
    favouriteFruit : banana

});
apple.save();
human.save();



fruitModel.insertMany([kiwi , banana , orange]).then(function(){
    console.log("Successfuly saved all the fruits to fruitsDB"); 
}).catch(function(err){
    console.log(err);
});



fruitModel.find().then(function(fruitDocs){
                                                               
    fruitDocs.forEach(element => {     
        console.log(element.name );
    });
    mongoose.connection.close();
}).catch(function(err){
    console.log(err); 
});
   


humanModel.updateOne({name:"John"} , {favouriteFruit : kiwi}).then(function(){
    console.log("Successfuly update the document");
}).catch(function(err){
    console.log(err);
})


fruitModel.deleteOne({_id : "649a009eeb25152a556766e5"} ).then(function(){
    console.log("Successfuly delete the document");
}).catch(function(err){
    console.log(err);
})



fruitModel.deleteMany({name:"apple"}).then(function(){
    console.log("Successfuly delete the documents");
}).catch(function(err){
    console.log(err);
})