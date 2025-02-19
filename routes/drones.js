const express = require("express");
const router = express.Router();
const Drone = require("../models/Drone.model.js");

// require the Drone model here

router.get("/drones", (req, res, next) => {
  // Iteration #2: List the drones
  // ... your code here
  Drone.find()
    .then((response) => {
      console.log(response);
      res.render("drones/list.hbs", {
        droneList: response,
      });
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  res.render("drones/create-form.hbs");
});

router.post("/drones/create", (req, res, next) => {
  // Iteration #3: Add a new drone
  // ... your code here
  const droneToAdd = {
    name: req.body.name,
    propellers: req.body.propellers,
    maxSpeed: req.body.maxSpeed,
  };
  Drone.create(droneToAdd)
    .then((response) => {
      console.log("Drone añadido correctamente");
      res.redirect("/drones");
    })
    .catch((error) => {
      next(error);
    });
});

router.get("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here

  const { id } = req.params;

  Drone.findById(id)
    .then((response) => {
      console.log(response);
      res.render("drones/update-form.hbs", {
        droneToUpdate: response,
      });
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/drones/:id/edit", (req, res, next) => {
  // Iteration #4: Update the drone
  // ... your code here
  const { id } = req.params;

  const { name, propellers, maxSpeed } = req.body;

  const newDroneUpdate = {
    name,
    propellers,
    maxSpeed,
  };

  Drone.findByIdAndUpdate(id, newDroneUpdate)
    .then((response) => {
      res.redirect("/drones");
    })
    .catch((err) => {
      next(err);
    });
});

router.post("/:id/delete", (req, res, next) => {
  // Iteration #5: Delete the drone
  // ... your code here
  const { id } = req.params;

  Drone.findByIdAndDelete(id)
    .then(() => {
      res.redirect("/drones");
    })
    .catch((err) => {
      next(err);
    });
});

module.exports = router;
