const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const workoutSchema = new Schema({
    day: {
        type: Date,
        default: new Date()
    },
    exercises: [{
        type: {
            type: String,
            required: 'Please a type of exercise'
        },
        name: {
            type: String,
            required: 'Enter a name for the exercise'
        },
        duration: {
            type: Number,
            required: 'Enter the duration of the exercise'
        },
        weight: {
            type: Number,
        },
        repetitions: {
            type: Number,
        },
        sets: {
            type: Number,
        },
        distance: {
            type: Number,
        }
    }]
})

module.exports = mongoose.model('Workout', workoutSchema);