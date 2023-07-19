const express = require("express");
const router=express.Router();
const { getProductController, postProductController, deleteProductController } = require("../controllers/productControllers");

router.get('/',getProductController);
router.post('/',postProductController);
router.delete('/:id',deleteProductController);

module.exports=router;