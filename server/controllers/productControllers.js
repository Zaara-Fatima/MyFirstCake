import Product from "../models/Product.js";

/**
 * @desc    Get all products
 * @route   GET /api/products
 */
export const getProducts = async (req, res) => {
  try {
    const products = await Product.find({});
    res.json(products);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

/**
 * @desc    Get single product
 * @route   GET /api/products/:id
 */
export const getProductById = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    res.json(product);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

/**
 * @desc    Create product
 * @route   POST /api/products
 */
export const createProduct = async (req, res) => {
  try {
    // If request body is an array → create multiple
    if (Array.isArray(req.body)) {
      
      const productsWithUser = req.body.map((item) => ({
        ...item,
        user: req.user._id, // attach admin id
      }));

      const products = await Product.insertMany(productsWithUser);

      return res.status(201).json(products);
    }

    // Otherwise → create single product
    const { name, price, description, countInStock, brand, image, category } = req.body;

    const product = new Product({
      name,
      price,
      description,
      countInStock,
      user: req.user._id,
      brand,
      image,
      category,
    });

    const createdProduct = await product.save();

    res.status(201).json(createdProduct);

  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: error.message });
  }
};

/**
 * @desc    Update product
 * @route   PUT /api/products/:id
 */
export const updateProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    product.name = req.body.name || product.name;
    product.price = req.body.price || product.price;
    product.description = req.body.description || product.description;
    product.countInStock =
      req.body.countInStock ?? product.countInStock;

    const updatedProduct = await product.save();

    res.json(updatedProduct);
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};

/**
 * @desc    Delete product
 * @route   DELETE /api/products/:id
 */
export const deleteProduct = async (req, res) => {
  try {
    const product = await Product.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    await product.deleteOne();

    res.json({ message: "Product removed" });
  } catch (error) {
    res.status(500).json({ message: "Server Error" });
  }
};