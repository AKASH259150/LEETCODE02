
const mongoose = require("mongoose");

async function main() {
  try {
    await mongoose.connect(process.env.DB_CONNECT_STRING, {
      dbName: "leetcode",      // 👈 your database name
      authSource: "admin",     // 👈 Atlas auth DB
    });
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    throw err;
  }
}

module.exports = main;


