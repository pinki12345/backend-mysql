const models = require("../models");

exports.createPrice = async (req, res) => {
  try {
    const categoryId = parseInt(req.params.categoryId);
    const serviceId = parseInt(req.params.serviceId);
    const { Duration, Price, Type } = req.body;
    const data = await models.Service.findOne({ where: { id: serviceId } });
    if (!data) {
      res.status(500).send({
        message: "Service not found",
      });
    }
    const price = await models.Price.create({
      serviceId,
      Duration,
      Price,
      Type,
    });
    res.status(200).json({
      message: "price created successfully!",
      data: price,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the service.",
    });
  }
};

exports.findAllPriceAccToServiceId = async (req, res) => {
  try {
    const id = req.params.id; //serviceId
    const data = await models.Service.findByPk(id, {
      include: [models.Price],
    });

    res.status(200).json({
      message: "price fetched successfully!",
      data: data,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the service.",
    });
  }
};


exports.updatePriceByCategoryIdAndServiceId = async (req, res) => {
  try {
    const categoryId = parseInt(req.params.categoryId);
    const serviceId = parseInt(req.params.serviceId);
    const { Duration,Price,Type,id } = req.body;
    const service = await models.Service.findOne({
      where: { id: serviceId, CategoryID: categoryId },
    });
    const updatePrice = await models.Price.update(
      { Duration,Price,Type },
      {where: {id:id}});      
      const data = await models.Service.findByPk(service.id, {
        include: [models.Price],
      });
    return res.json({
      message: "Price options updated successfully",
      updatedPrice:updatePrice,
      data: data,
    });
  } catch (err) {
    res.status(500).send({
      message: err.message || "Some error occurred while creating the service.",
    });
  }
};


exports.removePriceByCategoryIdAndServiceId= async(req,res)=>{
    try{
        const categoryId = parseInt(req.params.categoryId);
        const serviceId = parseInt(req.params.serviceId);
        const priceId = parseInt(req.params.priceId);
        const price = await models.Price.findOne({where:{id:priceId}})
        if(!price){
            res.status(500).send({
                message: "Price not found",
              });
        }
         const deletePrice = await models.Price.destroy({
            where:{
                id:price.id
            }
        })
        res.status(200).json({
            message: "Price deleted successfully",
            data:deletePrice
        })

    }
    catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while creating the service.",
          });
    }
}



