const path = require("path");
const router = require("express").Router()
const model = require("../models");
const Workout = require("../models/workout.js");

router.get("/api/workouts", (req, res) => {
    Workout.find({}).then(dbWorkout => {
        res.json(dbWorkout)
    })
        .catch(err => res.json(err))
});
router.get("/api/workouts/range", (req, res) => {
    Workout.find({}).limit(7).then(DBworkout => res.json(DBworkout)).catch(err => res.status(500).json(err))
});


router.post("/api/workouts", (req, res) => {
    Workout.create(req.body, (error, data) => {
        if (error) { res.json(error) } else{res.json(data)}
    })
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, {
        new: true, runValidators: true,
    })
})

module.exports = router;

