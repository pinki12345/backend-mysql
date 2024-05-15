const models = require("../models");
var bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
require("dotenv").config();

exports.signin = async (req, res) => {
  try {
    const { email, password } = req.body;

    if (!email && !password) {
      res.status(404).json({
        message: "Please provide email and password",
      });
    }

    const data = await models.User.findOne({ where: { email: email } });
    if (data) {
      res.status(404).json({
        message: "User already exists",
      });
    }
    const salt = await bcrypt.genSalt(10);
    const hash = await bcrypt.hash(password, salt);

    const user = await models.User.create({ email, password: hash });
    res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;
    if (!email && !password) {
      res.status(404).json({
        message: "Please provide email and password",
      });
    }
    const user = await models.User.findOne({ where: { email: email } });
    if (!user) {
      res.status(404).json({
        message: "User not found",
      });
    }
    const validPassword = bcrypt.compare(
      password,
      user.password,
      function (err, result) {
        if (result) {
          const token = jwt.sign(
            {
              email: user.email,
              id: user.id,
            },
            process.env.JWT_SECRET,
            function (err,token) {
              res.status(201).json({
                success: true,
                message: "User logged in successfully",
                token:token,
              });
            }
          );
        }
        else{
            res.status(404).json({
              message: "Invalid password",
            });
        }
      }
    );

    
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
