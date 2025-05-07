import mongoose from "mongoose";
import colors from "colors";

// a mongoose stuf (mongoose.connect ....) return always a promise
const connectDB = async () => {
  try {
    const conn = await mongoose.connect(
      "mongodb+srv://sathiyaseelan0712:fitwearPassWord@cluster0.xbplvpl.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0",
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useCreateIndex: true,
      }
    );
    console.log(`MongoDB Connected: ${conn.connection.host}`.cyan.underline);
  } catch (error) {
    console.error(`Error: ${error.message}`.red.underline.bold);
    process.exit(1);
  }
};

export default connectDB;
