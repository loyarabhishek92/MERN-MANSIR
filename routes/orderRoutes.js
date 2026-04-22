import express from 'express';

import mongoose from 'mongoose';
import { createOrder, getOrder, getOrders } from '../controllers/orderController.js';
import { userCheck } from '../middlewares/userCheck.js';
import { methodNotAllowed } from '../utils/methodNotAllowed.js';



const router = express.Router();


router.param('id', (req, res, next, id) => {
  if (!mongoose.Types.ObjectId.isValid(id)) return res.status(400).json({ message: "Invalid order id" });
  req.productId = id;
  next();
});

router.route('/').get(userCheck, getOrders).post(userCheck, createOrder).all(methodNotAllowed);

router.route('/:id').get(getOrder).all(methodNotAllowed);


export default router;