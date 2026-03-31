const mongoose = require('mongoose');

const wellnessClassSchema = new mongoose.Schema({
  title: {
    type: String,
    required: [true, 'Title is required'],
    trim: true
  },
  description: {
    type: String,
    required: [true, 'Description is required'],
    trim: true
  },
  instructor: {
    type: String,
    required: [true, 'Instructor name is required'],
    trim: true
  },
  duration: {
    type: Number,
    required: [true, 'Duration in minutes is required'],
    min: 1
  },
  category: {
    type: String,
    required: [true, 'Category is required'],
    enum: ['Yoga', 'Meditation', 'Fitness', 'Wellness', 'Mindfulness']
  },
  rating: {
    type: Number,
    default: 0,
    min: 0,
    max: 5
  },
  participants: {
    type: Number,
    default: 0
  },
  imageUrl: {
    type: String,
    trim: true
  },
  tags: [{
    type: String,
    trim: true,
    lowercase: true
  }],
  difficulty: {
    type: String,
    enum: ['Beginner', 'Intermediate', 'Advanced'],
    default: 'Beginner'
  },
  isActive: {
    type: Boolean,
    default: true
  }
}, {
  timestamps: true
});

module.exports = mongoose.model('WellnessClass', wellnessClassSchema);
