// user-service.js
const db = require('./db');

async function fetchUser(userId) {
  try {
    await db.connect();
    return { id: userId, name: "Test User" };
  } catch (error) {
    // Add additional context to the trace
    throw new Error(`Failed to fetch user ${userId}: ${error.message}`, { cause: error });
  }
}

module.exports = { fetchUser };
