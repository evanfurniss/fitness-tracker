const Workout = require("../models/workouts");
const app = require("express").Router();

app.get("/api/workouts", (req,res) => {
    console.log("inside api");
    Workout.aggregate([
        {$addFields: {
            totalDuration: { $sum: "$exercises.duration" }
        }
    }])
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    })
});

app.get("/api/workouts/range", (req, res) => {
    Workout.find({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    })
});

app.post("/api/workouts", (req, res) => {
    Workout.create({})
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    })
});

app.put("/api/workouts/:id", ({body, params}, res)=>{
    Workout.findByIdAndUpdate(
        params.id, 
        {$push: {exercises:body}}, 
        {new:true, runValidators:true}
    )
    .then(data => {
        res.json(data);
    })
    .catch(err => {
        res.json(err);
    })
});

module.exports = app;