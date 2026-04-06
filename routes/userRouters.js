import express from "express";
import { methodNotAllowed } from "../utils/methodNotAllowed.js";
import { userLogin, userRegister } from "../controllers/userController.js";
import { loginSchema, registerSchema, validator } from "../utils/validators.js";

const router = express.Router();

router.route('/login').post(validator.body(loginSchema), userLogin).all(methodNotAllowed);
router.route('/register').post(validator.body(registerSchema), userRegister).all(methodNotAllowed);


export default router;