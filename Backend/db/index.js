import mongoose from "mongoose"

const ConnectDB = async () => {
try{
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("MongoDB connected successfully !")
}
catch(error){
    console.log("MongoDB connection failed")
}
}

export {ConnectDB}