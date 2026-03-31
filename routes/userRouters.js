import express from "express";
import { methodNotAllowed } from "../utils/methodNotAllowed.js";
import { userLogin, userRegister } from "../controllers/userController.js";

const router = express.Router();

router.route('/login').post(userLogin).all(methodNotAllowed);
router.route('/register').post(userRegister).all(methodNotAllowed);


export default router;