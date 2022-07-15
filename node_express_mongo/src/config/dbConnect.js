import mongoose from "mongoose"
import dotenv from "dotenv"

if( process.env.NODE_ENV !== 'production'){
    dotenv.config()
}
mongoose.connect(process.env.MONGO_URL)

let db = mongoose.connection

export default db