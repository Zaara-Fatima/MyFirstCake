import mongoose from "mongoose"

const productSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Product name required"],
      trim: true,
      maxlength: 200,
    },

    image: {
      type: String,
      required: true,
    },

    description: {
      type: String,
      required: true,
      maxlength: 2000,
    },

    brand: {
      type: String,
      required: true,
    },

    category: {
      type: String,
      required: true,
      index: true,
    },

    price: {
      type: Number,
      required: true,
      min: 0,
    },

    countInStock: {
      type: Number,
      required: true,
      min: 0,
    },

    rating: {
      type: Number,
      default: 0,
      min: 0,
      max: 5,
    },

    numReviews: {
      type: Number,
      default: 0,
    },

    isActive: {
      type: Boolean,
      default: true,
    },
  },
  {
    timestamps: true,
  }
)

/* =========================
   INDEXES
========================= */
productSchema.index({ name: "text", description: "text" })

const Product = mongoose.model("Product", productSchema)
export default Product