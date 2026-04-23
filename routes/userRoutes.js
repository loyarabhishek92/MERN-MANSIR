import express from "express";
import { methodNotAllowed } from "../utils/methodNotAllowed.js";
import { getUser, updateUser, login, register } from "../controllers/userController.js";
import { loginSchema, registerSchema, validator } from "../utils/validators.js";
import { userCheck } from "../middlewares/userCheck.js";

const router = express.Router();

router.route('/profile').get(userCheck, getUser).patch(userCheck, updateUser).all(methodNotAllowed);


router.route('/login').post(validator.body(loginSchema), login).all(methodNotAllowed);
router.route('/register').post(validator.body(registerSchema), register).all(methodNotAllowed);


export default router;