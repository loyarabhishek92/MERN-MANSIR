import express from "express";
import { createProducts, deleteProducts, getProduct, getProducts, updateProducts } from "../controllers/productController.js";
import { methodNotAllowed } from "../utils/methodNotAllowed.js";
import mongoose from "mongoose";
import { fileCheck } from "../middlewares/fileCheck.js";

const router = express.Router();

router.route('/').get(getProducts).post(fileCheck, createProducts).all(methodNotAllowed);

router.param('id', (req, res, next, id) => {

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(400).json({ message: 'Invalid ID' });
  }
  req.id = id;
  next();
});
router.route('/:id').get(getProduct).patch(updateProducts).delete(deleteProducts).all(methodNotAllowed);

export default router;