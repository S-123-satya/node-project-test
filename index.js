const express = require('express');
const path = require('path');
const sequelize = require('./util/database');
const Product = require('./models/productModels');
const bodyParser = require('body-parser');
const app=express();

app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());
app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

app.delete('/product/:id',(req,res)=>{
    console.log(req.body);
    Product.findAll({where:{id:req.params.id}})
        .then(result=>{
            console.log(result+'successful')
            Product.destroy({where:{id:req.params.id}})
                .then(data=>console.log(data))
                .catch(err=>console.log(err))
            res.json(result)

        })
        .catch(err=>console.log(err))
})
app.get('/product',(req,res)=>{
    console.log(req.body);
    Product.findAll()
        .then(result=>{
            console.log(result+'successful')
            res.json(result)

        })
        .catch(err=>console.log(err))
})

app.post('/product',(req,res)=>{
    console.log(req.body);
    Product.create(req.body)
        .then(result=>{
            console.log(result+'successful')
            res.json(result)
        })
        .catch(err=>console.log(err))
})
const obj={
    item:'fb',
    price:43,
    category:'food'
}
// Product.create(obj)
//     .then(result=>console.log(result+'successful'))
//     .catch(err=>console.log(err))
// Product.sync({force:true})
//     .then(result=>console.log(result+'successful'))
//     .catch(err=>console.log(err))
// sequelize.authenticate()
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))
app.listen(3000,()=>console.log('listening on port 3000'))