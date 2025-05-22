import mongoose from 'mongoose'


const mongodb_url = process.env.MONGO_URI || 'mongodb://localhost:27017/' ;
const connectDB = async() => {
    mongoose.connection.on('connected', ()=>{
        console.log('Connected to MongoDB')
    })
    await mongoose.connect(`${mongodb_url}`)
}

export default connectDB;