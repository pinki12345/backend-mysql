const express = require('express');
const router = express.Router();
const {auth} = require('../middleware/auth')
const{createCategory,updateCategory,deleteEmptyCategory,getAllCategory} = require('../controllers/category')




router.post("/create/",auth,createCategory)
router.get("/getAllCategory",auth,getAllCategory)
router.put("/update/:id",auth,updateCategory)
router.delete("/deleteEmptyCategory/:id",auth,deleteEmptyCategory)



module.exports =router