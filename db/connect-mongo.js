import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();
const getConnetion = async () => {

  try {
    const url =
      `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@ingeneriaweb2.ee0fz.mongodb.net/movies?retryWrites=true&w=majority&appName=ingeneriaWeb2`

    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }

  
};

export default getConnetion;
