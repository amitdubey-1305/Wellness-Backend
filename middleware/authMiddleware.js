const jwt = require('jsonwebtoken');

module.exports = function authMiddleware(req, res, next) {
  try {
    const authHeader = req.headers["authorization"];

    if (!authHeader || !authHeader.startsWith("Bearer ")) {
      return res.status(401).json({ error: "Missing or malformed Authorization header" });
    }

    const token = authHeader.split(" ")[1]; // safer than slice

    if (!process.env.JWT_SECRET) {
      console.error("🚨 JWT_SECRET is not set in environment variables!");
      return res.status(500).json({ error: "Server configuration error" });
    }

    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    req.user = decoded;       // payload from token
    req.userId = decoded.userId; // specific userId if included

    next();
  } catch (err) {
    console.error("🚨 JWT Error:", err.name, err.message);
    return res.status(401).json({ error: "Invalid or expired token" });
  }
};
