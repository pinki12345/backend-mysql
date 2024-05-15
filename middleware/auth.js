
const  jwt = require('jsonwebtoken');
require("dotenv").config();


exports.auth = async(req,res,next) =>{
    try{
         const token = req.headers.authorization.split(" ")[1];
         const decoded = jwt.verify(token,process.env.JWT_SECRET);
         req.user = decoded;
         next();
    }
    catch(err){
        res.status(500).json({
            message:err.message
        })
    }
}