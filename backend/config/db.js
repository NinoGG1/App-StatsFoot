const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    mongoose.set("strictQuery", false);
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB is connected");
  } catch (err) {
    console.error(err.message);
    process.exit();
  }
};

module.exports = connectDB;
