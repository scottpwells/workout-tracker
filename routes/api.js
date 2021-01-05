const router = require("express").Router()
const Workout = require("../models/workout.js");

router.get("/api/workouts", function (req, res) {
    Workout.find().then(dbWorkout => {
        res.json(dbWorkout)
    })
        .catch(err => res.json(err))
});
router.get("/api/workouts/range", function (req, res) {
    Workout.find().limit(7).then(DBworkout => res.json(DBworkout)).catch(err => res.status(500).json(err))
});


router.post("/api/workouts", function (req, res) {
    Workout.create({}).then(dbWorkout => {
        res.json(dbWorkout)
    }).catch(err => res.json(err))
});

router.put("/api/workouts/:id", ({ body, params }, res) => {
    Workout.findByIdAndUpdate(params.id, { $push: { exercises: body } }, {
        new: true, runValidators: true,
    })
})

module.exports = router;

