import mongoose from "mongoose";

export default async function connectToDB() {
  try {
    // Check if the database is already connected
   
    
    // Connect to the database
    await mongoose.connect(process.env.MONGODB_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected successfully");
  } catch (e) {
    console.error("Database connection error:", e);
  }
}
