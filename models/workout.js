const mongoose = require("mongoose");

const workoutSchema = new mongoose.Schema({
  day: {
    type: Date,
    default: () => new Date(),
  },
  exercises: [
    {
      type: {
        type: String,
        required: "Enter Type",
        trim: true,
      },
      name: {
        type: String,
        required: "Enter Name",
        trim: true,
      },
      duration: {
        type: Number,
        required: "Enter Duration"
      },
      distance: Number,
      reps: Number,
      sets: Number,
      weight: Number
    },
  ],
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;
