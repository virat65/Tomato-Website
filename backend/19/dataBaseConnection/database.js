import mongoose from "mongoose";
const dataBase = async () => {
  try {
    const data = await mongoose.connect(process.env.mongoURL);
    console.log(`database Connected`);
  } catch (error) {
    console.log(error, "error inside the dataBase");
  }
};

export default dataBase;
