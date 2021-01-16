const mongoose = require("mongoose")
const Schema = mongoose.Schema;



const workoutSchema = new Schema({
day:
    {
        type: Date,
        default: Date.now,

    },

    exercises: [
        {
            type: {
                type: String,
                trim: true,
                choice: ['cardio', 'resistance'],
                required: "Exercise Type is required"
            },
            name: {
                type: String,
                trim: true,
                required: "Enter an exercise name"
            },
            duration: {
                type: Number,
                min: 1,
                required: true
            },
            weight: {
                type: Number,
                min: 1
            },
            reps: {
                type: Number,
                min: 1
            },
            sets: {
                type: Number,
                min: 1
            },
            distance: {
                type: Number,
                min: 1,
          }
     }]
});


const Workout = mongoose.model("Workout", workoutSchema);


module.exports = Workout;