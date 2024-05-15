const models = require('../models');


exports.createService = async(req,res)=>{
    try{
        const id = req.param.id;
        const CategoryID = id;
         const{ServiceName,Type,Price} = req.body
         const service = await models.Service.create({CategoryID,ServiceName,Type,Price})
         res.status(200).json({
             message: "Service created successfully!",
             data: service
         })
    }
    catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while creating the service."
        });
    }
}


exports.findAllServicesAccToCategoryId = async(req,res)=>{
    try{
           const id = req.params.id
           const data = await models.Category.findByPk(id,{
            include:[models.Service]
           })

           res.status(200).json({
               message: "Service created successfully!",
               data: data
           })
    }
    catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while creating the service."
        });
    }
}

exports.deleteService = async(req,res)=>{
    try{
        //service id
        const id = req.params.id
        const data = await models.Service.destroy({
            where:{
                id:id
            }
        })

        res.status(200).json({
            message: "Service deleted successfully!",
            data: data
        })
    }

    catch(err){
        res.status(500).send({
            message: err.message || "Some error occurred while creating the service."
        });
    }
}


exports.updateService = async(req,res)=>{
  try{
    //service id
    const id = req.params.id
    const {CategoryID,ServiceName,Type,Price } = req.body;
    const service = await models.Service.findOne({ where: { id: id } });
    const updateService = await models.Service.update(
      { CategoryID,ServiceName,Type,Price  },
      {
        where: {
          id: service.id,
        },
      }
    );

    const getupdateService = await models.Service.findOne({
      where: { id: service.id },
    });
    res.status(200).json({
      message: "Service updated successfully!",
      data: getupdateService,
    });
  }
  catch(err){
    res.status(500).send({
        message: err.message || "Some error occurred while creating the service."
    });
  }
}