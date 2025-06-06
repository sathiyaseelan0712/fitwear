import express from 'express'
import cors from 'cors'
import 'dotenv/config' 
import connectDB from './config/mongodb.js'
import connectCloudinary from './config/cloudinary.js'
import userRouter from './routes/userRoute.js'
import productRouter from './routes/productRoute.js'
import cartRouter from './routes/cartRoute.js'
import orderRouter from './routes/orderRoute.js'
import morgan from 'morgan';

// App config
const app = express()
const port = process.env.PORT || 8080

// Connect to services
connectDB();
connectCloudinary();

// Middlewares
app.use(express.json())
app.use(cors())
app.use(morgan("dev"))

// API endpoints
app.use('/api/user', userRouter)
app.use('/api/product', productRouter)
app.use('/api/cart', cartRouter)
app.use('/api/order', orderRouter)

app.get('/', (req, res) => {
    res.send("API working")
})

// Start server
app.listen(port, () => console.log(`Server started on port: ${port}`))
