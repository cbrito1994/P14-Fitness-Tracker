const router = require('express').Router();
const Workout = require('../models/workout');

router.post('/api/workout', (req, res) => {
    Workout.create({}).then(response => res.json(response)).catch(err => res.json(err))
})

router.get('/api/workout', (req, res) => {
    Workout.aggregate([{
        $addSum: {
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

router.get('/api/workout/range', (req, res) => {
    Workout.aggregate([{
        $addSum: {
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

router.put('/api/workout/:id', (req, res) => {
    const id = req.params.id;
    Workout.findByIdAndUpdate(id).then(response => {
        res.json(response)
    }).catch(err => {
        res.json(err)
    })
})