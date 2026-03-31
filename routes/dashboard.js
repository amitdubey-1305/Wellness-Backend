// routes/dashboard.js
const express = require('express');
const authMiddleware = require('../middleware/authMiddleware');

const router = express.Router();

// Apply JWT protection to every /dashboard route
router.use(authMiddleware);

router.get('/', (req, res) => {
  res.json([
    {
      id: '1',
      title: 'Morning Yoga Flow',
      description: 'Start your day with calm and energy.',
      instructor: 'Anjali Verma',
      duration: 30,
      category: 'Yoga',
      rating: 4.8,
      participants: "1,200",
      imageUrl: 'https://example.com/yoga.jpg',
      tags: ['yoga', 'morning', 'calm'],
      difficulty: 'Beginner'
    },
    {
      id: '2',
      title: 'Mindful Breathing Meditation',
      description: 'A guided session to center your thoughts and breathe deeply.',
      instructor: 'Rahul Sen',
      duration: 20,
      category: 'Meditation',
      rating: 4.9,
      participants: 950,
      imageUrl: 'https://example.com/meditation.jpg',
      tags: ['meditation', 'breathing', 'calm'],
      difficulty: 'Beginner'
    },
    {
      id: '3',
      title: 'Sleep Better Tonight',
      description: 'Start your day with calm and energy.',
      instructor: 'Anjali Verma',
      duration: 30,
      category: 'Yoga',
      rating: 4.8,
      participants: "1,200",
      imageUrl: 'https://example.com/yoga.jpg',
      tags: ['yoga', 'morning', 'calm'],
      difficulty: 'Beginner'
    },
    {
      id: '4',
      title: 'Mental Clarity Meditation',
      description: 'Start your day with calm and energy.',
      instructor: 'Anjali Verma',
      duration: 30,
      category: 'Yoga',
      rating: 4.8,
      participants: "1,200",
      imageUrl: 'https://example.com/yoga.jpg',
      tags: ['yoga', 'morning', 'calm'],
      difficulty: 'Beginner'
    },
  ]);
});

module.exports = router;
