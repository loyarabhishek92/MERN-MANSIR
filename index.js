import express from 'express';
import morgan from 'morgan';
import mongoose from 'mongoose';
import productRoutes from "./routes/productRoutes.js"
import userRouters from "./routes/userRouters.js"
import { dbUrl } from './DB/db.js';
import fileUpload from 'express-fileupload';

const app = express();
const port = 5000;

//database connection
mongoose.connect(dbUrl).then(() => {
  app.listen(port, () => {
  console.log(`Database connected and Server is running on port ${port}`);
});

}

).catch((err) => {
  console.log(err);
})







app.use(express.json());   //yo code chaihi body ma data pathauxa kaam garxa yo code na lakhada body ma pathako data show hudaina
app.use(morgan('dev'));

app.use(fileUpload({
  limits: {fileSize: 5*1024*1024},
}));


app.get('/', (req, res) => {

  return res.status(200).json({
    message: "Welcome to the API!",
  })
});

app.use('/api/products', productRoutes);
app.use('/api/user', userRouters);

