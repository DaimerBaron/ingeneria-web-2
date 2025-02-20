const mongoose = require("mongoose");
const getConnetion = async () => {
  try {
    const url =
      "mongodb+srv://daimerbaron:tHApkqRlX8W9FPL3@cluster0.a0kcq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }

  module.exports= {getConnetion}
};
