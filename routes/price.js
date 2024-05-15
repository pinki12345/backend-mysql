const express = require('express');
const router = express.Router();
const{createPrice,updatePriceByCategoryIdAndServiceId,findAllPriceAccToServiceId,removePriceByCategoryIdAndServiceId} = require('../controllers/price')
const {auth} = require('../middleware/auth')


router.post('/createPrice/:categoryId/:serviceId',auth,createPrice)
router.put('/category/:categoryId/service/:serviceId',auth,updatePriceByCategoryIdAndServiceId),
router.get("/findAllPriceAccToServiceId/:id",auth,findAllPriceAccToServiceId)
router.delete('/removePriceByCategoryIdAndServiceId/:categoryId/service/:serviceId/price/:priceId',removePriceByCategoryIdAndServiceId)

module.exports =router