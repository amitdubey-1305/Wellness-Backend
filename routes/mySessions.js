const express = require('express');
const router = express.Router();
const Session = require('../models/Session');
const authMiddleware = require('../middleware/authMiddleware');

// 🔐 All routes are protected by authMiddleware
router.use(authMiddleware);

// GET /my-sessions – Get all sessions (draft + published) of the logged-in user
router.get('/', async (req, res) => {
    try {
        const sessions = await Session.find({ user_id: req.userId }).sort({ createdAt: -1 });
        res.json(sessions);
    } catch (err) {
        console.error('Error fetching sessions:', err);
        res.status(500).json({ error: 'Server error while fetching sessions' });
    }
});

// GET /my-sessions/:id – Get a single session by ID (must belong to user)
router.get('/:id', async (req, res) => {
    try {
        const session = await Session.findOne({ _id: req.params.id, user_id: req.userId });

        if (!session) {
            return res.status(404).json({ error: 'Session not found or unauthorized' });
        }

        res.json(session);
    } catch (err) {
        console.error('Error fetching session:', err);
        res.status(500).json({ error: 'Server error while fetching session' });
    }
});

// POST /my-sessions/save-draft – Save or update a draft session
router.post('/save-draft', async (req, res) => {
    try {
        const { _id, title, tags, json_file_url, description, duration, category, difficultyLevel, instructions } = req.body;

        const sessionData = {
            title,
            tags,
            json_file_url,
            description,
            duration,
            category,
            difficultyLevel,
            instructions,
            user_id: req.userId,
            status: 'draft'
        };

        let session;

        if (_id) {
            // Update existing draft
            session = await Session.findOneAndUpdate(
                { _id, user_id: req.userId },
                sessionData,
                { new: true }
            );
        } else {
            // Create new draft
            session = await Session.create(sessionData);
        }

        res.status(201).json(session);
    } catch (err) {
        console.error('Error saving draft:', err);
        res.status(500).json({ error: 'Server error while saving draft' });
    }
});

// POST /my-sessions/publish – Create a published session
router.post('/publish', async (req, res) => {
    try {
        const { title, tags, json_file_url, description, duration, category, difficultyLevel, instructions } = req.body;

        const session = await Session.create({
            user_id: req.userId,
            title,
            tags,
            json_file_url,
            description,
            duration,
            category,
            difficultyLevel,
            instructions,
            status: 'published'
        });

        res.status(201).json(session);
    } catch (err) {
        console.error('Error publishing session:', err);
        res.status(500).json({ error: 'Server error while publishing session' });
    }
});

module.exports = router;