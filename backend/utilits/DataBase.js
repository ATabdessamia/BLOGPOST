import mongoose from "mongoose";

const connectDb = async () => {
  try {
    const con = await mongoose.connect(process.env.DATABASE_LOCAL, {
      useUnifiedTopology: true,
      useNewUrlParser: true,
      useCreateIndex: true,
      useFindAndModify: false,
    });
    console.log(`Connected on ${con.connection.host}`);
  } catch (error) {
    console.log(`Error Connecte DB : ${error.message}`);
    process.exit(1);
  }
};

export default connectDb;
