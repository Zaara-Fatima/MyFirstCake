import User from "../models/User.js"
import generateToken from "../utils/generateToken.js"

/**
 * @desc    Register user
 * @route   POST /api/auth/register
 */
export const registerUser = async (req, res) => {
  try {
    const { name, email, password } = req.body

    // 1️⃣ Basic validation
    if (!name || !email || !password) {
      return res.status(400).json({
        success: false,
        message: "All fields are required",
      })
    }

    // 2️⃣ Check if user exists
    const userExist = await User.findOne({ email })

    if (userExist) {
      return res.status(400).json({
        success: false,
        message: "User already exists",
      })
    }

    // 3️⃣ Create user (DO NOT hash here)
    // Model will hash automatically
    const user = await User.create({
      name,
      email,
      password,
    })

    // 4️⃣ Send response with token
    res.status(201).json({
      success: true,
      _id: user._id,
      name: user.name,
      email: user.email,
      token: generateToken(user._id),
    })

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
}


/**
 * @desc    Login user
 * @route   POST /api/auth/login
 */
export const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body

    // 1️⃣ Validate input
    if (!email || !password) {
      return res.status(400).json({
        success: false,
        message: "Email and password required",
      })
    }

    // 2️⃣ Explicitly select password
    const user = await User.findOne({ email }).select("+password")

    // 3️⃣ Check user + compare password using model method
    if (user && (await user.matchPassword(password))) {
      res.json({
        success: true,
        _id: user._id,
        name: user.name,
        email: user.email,
        token: generateToken(user._id),
      })
    } else {
      res.status(401).json({
        success: false,
        message: "Invalid credentials",
      })
    }

  } catch (error) {
    res.status(500).json({
      success: false,
      message: "Server error",
    })
  }
}