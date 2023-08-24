import mongoose from 'mongoose'
import dotenv from "dotenv";

dotenv.config();

export default {
    start: () => {
        const desiredUsername = process.env.ADMIN_USER
        const desiredPassword = process.env.ADMIN_PASSWORD
        
        /* Mongoose connection */
        const mongoURI = `mongodb+srv://${desiredUsername}:${desiredPassword}@taskplanner.idxxcrv.mongodb.net/TaskPlanner?retryWrites=true&w=majority`
        mongoose.connect(mongoURI)
        
        mongoose.connection.on("connected", ()=> {
            console.log("Connected to Mongo Instance")
        })
        
        mongoose.connection.on('error', (err)=> {
            console.error("Error connecting to mongo", err);
        })
    }
}