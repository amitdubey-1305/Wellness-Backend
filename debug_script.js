require('dotenv').config();
const mongoose = require('mongoose');
const User = require('./models/User'); // Adjust path as needed

async function testConnection() {
    try {
        console.log("Full Environment Variables Loaded:", Object.keys(process.env).length);
        const url = process.env.MONGO_DB_URL || 'mongodb://localhost:27017/wellness';
        console.log("MONGO_DB_URL from env:", url ? (url.substring(0, 20) + "...") : "UNDEFINED");

        if (!url) {
            console.error("ERROR: MONGO_DB_URL is not set.");
            return;
        }

        console.log("Connecting to MongoDB...");
        await mongoose.connect(url);
        console.log("Connected successfully.");

        const email = "debug_test_" + Date.now() + "@example.com";
        const existingUser = await User.findOne({ email: email });
        console.log("Find user result:", existingUser);

        if (!existingUser) {
            console.log("Creating new user...");
            const newUser = new User({
                email: email,
                password_hash: "dummyhash123"
            });
            await newUser.save();
            console.log("User saved successfully.");
        }

    } catch (err) {
        console.error("CAUGHT Mongoose ERROR:");
        console.error("Name:", err.name);
        console.error("Message:", err.message);
        if (err.cause) console.error("Cause:", err.cause);
        console.error("Stack:", err.stack);
    } finally {
        await mongoose.disconnect();
    }
}

testConnection();
