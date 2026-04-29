import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import productRoutes from "./routes/productRoutes.js"
import userRoutes from "./routes/userRoutes.js"
import orderRoutes from "./routes/orderRoutes.js"
import fileUpload from 'express-fileupload';
import cors from "cors";
import {rateLimit} from "express-rate-limit";


const app = express();
const port = 5000;


const limiter = rateLimit({
  limit: 500,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again after an hour'
});



app.use(limiter);
app.use(express.json());   //yo code chaihi body ma data pathauxa kaam garxa yo code na lakhada body ma pathako data show hudaina
app.use(morgan('dev'));
app.use(fileUpload({
  limits: { fileSize: 5 * 1024 * 1024 },
}));

app.use(express.static('uploads'));
app.use(cors({
  origin: ['http://localhost:5173', 'https://mern-mansir.vercel.app/'],
}));



//database connection
mongoose.connect('mongodb+srv://AbhishekDB:abhishek400@cluster0.dolws2z.mongodb.net/Shopping').then((val) => {
  app.listen(port, () => {
    console.log(`Database connected and Server is running on port ${port}`);
  });

}
).catch((err) => {
  console.log(err);
});

app.get('/', (req, res) => {

  return res.status(200).json({
    message: "Welcome to the API!",
  });
});

app.use('/api/products', productRoutes);
app.use('/api/user', userRoutes);
app.use('/api/orders', orderRoutes);

