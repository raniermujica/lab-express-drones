// Iteration #1
const mongoose = require("mongoose")




const droneSchema = new mongoose.Schema({
    _id: String,
    name: String, 
    propellers: Number, 
    maxSpeed: Number
})



const Drone = mongoose.model("Drone" , droneSchema)

module.exports = Drone