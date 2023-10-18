const { hashPassword, comparePassword } = require("../helper/userHelper");
const JWT = require('jsonwebtoken')
const userModels = require("../models/userModels");
const registerController = async (req, res) => {
  try {
    const { email, name, password } = req.body;
    // validation
    if (!email || !name || !password) {
      return res.status(500).send({
        success: false,
        message: "All fields are require",
      });
    }
    const existingUser = await userModels.findOne({ email });
    if (existingUser) {
      return res.status(500).send({
        success: false,
        message: "User has already register",
      });
    }

    // hashedPassword 
    const hashedPassword  = await hashPassword(password)
    const user = await new userModels({
      email,
      name,
      password : hashedPassword
    }).save();
    return res.status(200).send({
      success: true,
      message: "user has been register",
      user,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).send({
      success: false,
      message: "Error to creating account",
    });
  }
};

const loginController = async (req, res) => {
  try {
    const {email, password} = req.body
    if (!email || !password) {
        return res.status(500).send({
            success: false,
            message: "Invalid email ans password"
        })
    }

    const user = await userModels.findOne({email})
    if (!user) {
        return res.status(500).send({
            success: false,
            message: 'user not register yet please login'
        })
    }
    // comparing password
    const match = await comparePassword(password, user.password)
    if (!match) {
        return res.status(200).send({
            success: false,
            message: "Password is wrong"
        })
    }

    const token = JWT.sign({id: user.id}, process.env.JWT_SECRET, {
      expiresIn: "1d"
    })

    return res.status(200).send({
        success: true,
        message: "User has been login",
        user,
        token
    })

  } catch (error) {
    
  }
}

module.exports = { registerController, loginController };
