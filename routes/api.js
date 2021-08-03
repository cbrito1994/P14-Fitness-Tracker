const router = require('express').Router();
const Workout = require('../models/workout');

router.post('/api/workouts', (req, res) => {
    Workout.create(req.body).then(response => res.json(response)).catch(err => res.json(err))
})

router.get('/api/workouts', (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: '$exercises.duration'
            }
        }
    }]).then(response => {
        res.json(response)
    }).catch(err => {
        res.json(err)
    })
})

router.get('/api/workouts/range', (req, res) => {
    Workout.aggregate([{
        $addFields: {
            totalDuration: {
                $sum: '$exercises.duration'
            }
        }
    }]).limit(7).then(response => {
        res.json(response)
    }).catch(err => {
        res.json(err)
    })
})

router.put('/api/workouts/:id', (req, res) => {
    const id = req.params.id;
    Workout.findByIdAndUpdate(id, { $push: { exercises: req.body } }).then(response => {
        res.json(response)
    }).catch(err => {
        res.json(err)
    })
})

module.exports = router;