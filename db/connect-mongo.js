import mongoose from "mongoose";
const getConnetion = async () => {
  try {
    const url =
      "mongodb+srv://daimerbaron:9SrbrOM8793P9jwb@ingeneriaweb2.ee0fz.mongodb.net/?retryWrites=true&w=majority&appName=ingeneriaWeb2";

    await mongoose.connect(url);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.log(error);
  }

  
};

export default getConnetion;
