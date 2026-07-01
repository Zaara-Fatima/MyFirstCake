import express from "express"
import {getUserProfile, getUsers} from "../controllers/userController.js"
import {loginUser,registerUser} from "../controllers/authController.js"

import {adminOnly, protect} from "../middleware/authMiddleware.js"

const router =express.Router()

router.post("/register", registerUser)
router.post("/login",loginUser)
router.get("/profile",protect,getUserProfile)
router.get("/profiles",protect,adminOnly, getUsers)

export default router;