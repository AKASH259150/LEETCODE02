
const mongoose = require("mongoose");
const dns = require("dns");

dns.setServers(["8.8.8.8", "8.8.4.4"]);


async function main() {
  try {
    console.log("env:",process.env.DB_CONNECT_STRING)
    await mongoose.connect(process.env.DB_CONNECT_STRING);
    console.log("MongoDB connected");
  } catch (err) {
    console.error("MongoDB connection error:", err.message);
    throw err;
  }
}

module.exports = main;


