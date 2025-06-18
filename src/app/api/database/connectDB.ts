import mongoose from "mongoose"

export const connectDB = async () => {
    try {
         const connect = await mongoose.connect(process.env.DATABASE_URL as string)
         console.log(`MongoDb connected:${connect.connection.host}`)
    }catch (error: any) {
        console.log('Error conneting to DB:', error.message);
        process.exit(1);
    }
    
}