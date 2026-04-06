import express from "express";
import { createProducts, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/productController.js";
import { methodNotAllowed } from "../utils/methodNotAllowed.js";
import mongoose from "mongoose";
import { fileCheck, updatefileCheck } from "../middlewares/fileCheck.js";
import { adminCheck, userCheck } from "../middlewares/userCheck.js";

const router = express.Router();

router.route('/').get(getProducts).post(userCheck, adminCheck, fileCheck, createProducts).all(methodNotAllowed);

router.param('id', (req, res, next, id) => {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID' });
  }
  req.id = id;
  next();
});
router.route('/:id').get(getProduct).patch(userCheck, adminCheck, updatefileCheck, updateProduct).delete(userCheck, adminCheck, deleteProduct).all(methodNotAllowed);

export default router;