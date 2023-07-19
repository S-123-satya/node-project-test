const Product = require("../models/productModels");

module.exports.deleteProductController = (req, res) => {
    console.log(req.body);
    Product.findAll({ where: { id: req.params.id } })
        .then(result => {
            console.log(result + 'successful')
            Product.destroy({ where: { id: req.params.id } })
                .then(data => console.log(data))
                .catch(err => console.log(err))
            res.json(result)

        })
        .catch(err => console.log(err))
};

module.exports.getProductController = (req, res) => {
    console.log(req.body);
    Product.findAll()
        .then(result => {
            console.log(result + 'successful')
            res.json(result)

        })
        .catch(err => console.log(err))
};

module.exports.postProductController = (req, res) => {
    console.log(req.body);
    Product.create(req.body)
        .then(result => {
            console.log(result + 'successful')
            res.json(result)
        })
        .catch(err => console.log(err))
};