const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password_hash: {
        type: String,
        required: true,
    },
}, {
    timestamps: true // Using timestamps option for created_at and updated_at
});

module.exports = mongoose.model('User', userSchema);