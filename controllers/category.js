const models = require("../models");

exports.createCategory = async (req, res) => {
  try {
    const { CategoryName } = req.body;
    const category = await models.Category.create({ CategoryName });
    res.status(200).json({
      message: "Category created successfully!",
      data: category,
    });
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the Category.",
    });
  }
};

exports.getAllCategory = async (req, res) => {
      try{
           const category = await models.Category.findAll();
           res.status(200).json({
             message: "Category created successfully!",
             data: category,
           });
      }
      catch(err){
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Category.",
      });
      }
}







exports.updateCategory = async (req, res) => {
  try {
    const id = req.params.id;
    const { CategoryName } = req.body;
    const category = await models.Category.findOne({ where: { id: id } });
    const updateCtaegory = await models.Category.update(
      { CategoryName },
      {
        where: {
          id: category.id,
        },
      }
    );

    const getupdateCategory = await models.Category.findOne({
      where: { id: category.id },
    });
    res.status(200).json({
      message: "Category updated successfully!",
      data: getupdateCategory,
    });
  } catch (err) {
    res.status(500).send({
      message:
        err.message || "Some error occurred while updating the Category.",
    });
  }
};


exports.deleteEmptyCategory = async (req, res) => {
    try{
           const id = req.params.id;

           const category = await models.Category.findOne({ where: { id: id } });

           const data = await models.Service.findOne({ where: { categoryID:category.id } });

           if(data){
            res.status(400).send({
                message: "Category can not be deleted because it is associated with a service.",
            });
           }

           const deleteCategory = await models.Category.destroy({ where: { id: category.id } });
           res.status(200).json({
               message: "Category deleted successfully!",
               data: deleteCategory,
           });
    }
    catch(err){
        res.status(500).send({
            message:
            err.message || "Some error occurred while deleting the Category.",
        });
    }
}