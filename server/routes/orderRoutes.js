import express from "express"
import {
  createOrder,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
  updateOrderStatus,
} from "../controllers/orderController.js"

import { protect, adminOnly } from "../middleware/authMiddleware.js"

const router = express.Router()


// ===============================
// USER ROUTES
// ===============================

// Create new order
router.post("/", protect, createOrder)

// Get logged in user's orders
router.get("/myorders", protect, getMyOrders)

// Get order by ID
router.get("/:id", protect, getOrderById)

// Mark order as paid
router.put("/:id/pay", protect, updateOrderToPaid)


// ===============================
// ADMIN ROUTES
// ===============================

// Get all orders (with pagination)
router.get("/", protect, adminOnly, getOrders)

// Update order to delivered
router.put("/:id/deliver", protect, adminOnly, updateOrderToDelivered)

// Update order status (processing → shipped → delivered → cancelled)
router.put("/:id/status", protect, adminOnly, updateOrderStatus)


export default router