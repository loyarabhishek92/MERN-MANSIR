import express from "express";
import { methodNotAllowed } from "../utils/methodNotAllowed.js";
import { getUser, updateUser, userLogin, userRegister } from "../controllers/userController.js";
import { loginSchema, registerSchema, validator } from "../utils/validators.js";
import { userCheck } from "../middlewares/userCheck.js";

const router = express.Router();

router.route('/profile').get(userCheck, getUser).patch(userCheck, updateUser).all(methodNotAllowed);

import { userLogin, userRegister } from "../controllers/userController.js";
import { loginSchema, registerSchema, validator } from "../utils/validators.js";

const router = express.Router();

router.route('/login').post(validator.body(loginSchema), userLogin).all(methodNotAllowed);
router.route('/register').post(validator.body(registerSchema), userRegister).all(methodNotAllowed);


export default router;