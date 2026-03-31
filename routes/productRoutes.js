import express from "express";
import { createProducts, deleteProduct, getProduct, getProducts, updateProduct } from "../controllers/productController.js";
import { methodNotAllowed } from "../utils/methodNotAllowed.js";
import mongoose from "mongoose";
import { fileCheck, updatefileCheck } from "../middlewares/fileCheck.js";

const router = express.Router();

router.route('/').get(getProducts).post(fileCheck, createProducts).all(methodNotAllowed);

router.param('id', (req, res, next, id) => {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID' });
  }
  req.id = id;
  next();
});
router.route('/:id').get(getProduct).patch(updatefileCheck, updateProduct).delete(deleteProduct).all(methodNotAllowed);

export default router;