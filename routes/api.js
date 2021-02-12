const router = require("express").Router();
const Workout = require("../models/workout");

router.get("/api/workouts", (req, res) => {
  Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ])
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.post("/api/workouts", (req, res) => {
  Workout.create({})
    .then((workout) => {
      res.json(workout);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.put("/api/workouts/:id", (req, res) => {
  const exercise = req.body;
  const id = req.params.id;
  Workout.findOneAndUpdate({ _id: id }, { $push: { exercises: exercise } })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

router.get("/api/workouts/range", (req, res) => {
  Workout.aggregate([
    { $addFields: { totalDuration: { $sum: "$exercises.duration" } } },
  ])
    .sort({ _id: -1 }).limit(7)
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      res.status(400).json(err);
    });
});

module.exports = router;
