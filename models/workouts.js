const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: () => new Date()
    },
    exercises: [{
        type: {
            type: String,
            trim: true,
            required: "Please add an exercise"
        },
        name: {
            type: String,
            trim: true,
            required: "Add a name for the exercise"
        },
        duration: {
            type: Number,
            required: "How long there bud?"
        },
        weight: {
            type: Number
        },
        sets: {
            type: Number
        },
        reps: {
            type: Number
        },
        distance: {
            type: Number
        }
    }]
    },
    {
        toJSON: {
            virtuals: true
        }
});

workoutSchema.virtual("totalDuration").get(() => {
    return this.exercises.reduce((total, exercise) => {
        return total + exercise.duration;
    });
});

const Workout = mongoose.model("Workout", workoutSchema);

module.exports = Workout;