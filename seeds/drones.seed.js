
const { db } = require("../models/Drone.model");

// Iteration #1
const drones = [
        { name: "Creeper XL 500", propellers: 3, maxSpeed: 12 },
        { name: "Racer 57", propellers: 4, maxSpeed: 20 },
        { name: "Courier 3000i", propellers: 6, maxSpeed: 18 }
];


require("../db")

const Drone = require("../models/Drone.model.js")

Drone
.create(drones)
.then(() => {
    console.log("drones agregados")
})
.catch((error) => {
    console.log(error)
})

