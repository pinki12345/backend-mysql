const express = require('express');
const router = express.Router();
const{createService,findAllServicesAccToCategoryId,deleteService,updateService} = require('../controllers/service')
const {auth} = require('../middleware/auth')



router.post("/createService/:id",auth,createService)
router.get("/findAllServicesAccToCategoryId/:id",auth,findAllServicesAccToCategoryId)
router.delete("/deleteService/:id",auth,deleteService)
router.put("/updateService/:id",auth,updateService)



module.exports =router