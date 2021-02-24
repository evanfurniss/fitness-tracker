const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const WorkoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            required: "Please add an exercise"
        },
        name: {
            type: String,
            required: "Add a name for the exercise"
        },
        duration: {
            type: String,
            required: "How long there bud?"
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number,
        },
        reps: {
            type: Number,
        },
        distance: {
            type: Number
        }
    }]
});

const Workout = mongoose.model("Workout", WorkoutSchema);

module.exports = Workout;
