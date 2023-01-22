import express from "express"
import { login, register } from "../controllers/auth.controller.js"
import { body } from 'express-validator'
import { validationResultMiddleare } from "../middlewares/validationResultMiddleare.js"

const router = express.Router()

router.post(
    '/login',
    [
        body('email', "Email is incorrect format")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body('password', 'Min 6 characters').trim().isLength({min:6})
    ],
    validationResultMiddleare,
    login
)
   
router.post(
    '/register',
    [
        body('email', "Email is incorrect format")
            .trim()
            .isEmail()
            .normalizeEmail(),
        body('password', 'Min 6 characters').trim().isLength({min:6})
    ],
    validationResultMiddleare,
    register
)

export default router