require("dotenv").config(); // Load environment variables

const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    if (!process.env.MONGO_URI) {
      throw new Error("MONGO_URI is missing in .env file");
    }

    console.log("Connecting to MongoDB..."); // Debugging message

    await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("MongoDB Connected ✅");
  } catch (error) {
    console.error("Database connection failed ❌", error);
    process.exit(1); // Exit process with failure
  }
};

module.exports = connectDB;
