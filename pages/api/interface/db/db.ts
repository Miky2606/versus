import mongoose from "mongoose"
const {MONGO_DB} = process.env

export const connectDB = async () => {

    
    const conn = await mongoose.connect(MONGO_DB as string)
        .catch(err => console.log(err)
        )
    console.log("Connected");
 return conn
}