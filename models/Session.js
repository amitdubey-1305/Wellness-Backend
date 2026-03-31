const mongoose = require('mongoose');

const sessionSchema = new mongoose.Schema({
    user_id: { // Added this to link a session to a user
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    title: {
        type: String,
        required: true,
        trim: true
    },
    description: {
        type: String,
        required: false, // Made this optional as it's not sent on save-draft
        trim: true
    },
    duration: {
        type: Number,
        required: false, // Made optional for draft sessions
        min: 1
    },
    category: {
        type: String,
        required: false, // Made optional for draft sessions
        enum: ['Meditation', 'Yoga', 'Fitness', 'Mindfulness', 'Stress Management', 'Other']
    },
    difficultyLevel: {
        type: String,
        required: false, // Made optional for draft sessions
        enum: ['Beginner', 'Intermediate', 'Advanced']
    },
    instructions: {
        type: String,
        required: false, // Made optional for draft sessions
        trim: true
    },
    tags: [{
        type: String,
        trim: true
    }],
    json_file_url: { // Added this to store the JSON data
        type: String,
        required: false,
    },
    status: { // Added this to differentiate between 'draft' and 'published'
        type: String,
        enum: ['draft', 'published'],
        default: 'draft'
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('Session', sessionSchema);