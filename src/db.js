import mongoose from 'mongoose';


export const connectDB = async() => {
  try {
    await mongoose.connect("mongodb+srv://cos4h:list.maph->hh@farmappdb.izo1q80.mongodb.net/?retryWrites=true&w=majority"); 

    console.log("DB is connected");
  } catch(error) {
    console.log(error);
  }
  
}