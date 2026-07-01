import express from "express"   
import { addToCart , removeFromCart} from "../controllers/cartController.js"
const router=express.Router()

router.post('/',addToCart)
router.delete('/:id',removeFromCart)

export default router