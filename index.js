const express = require('express');
const path = require('path');
const sequelize = require('./util/database');
const Product = require('./models/productModels');
const app=express();

app.use(express.static(path.join(__dirname,'public')));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname,'index.html'))
})

Product.sync({force:true})
    .then(result=>console.log(result+'successful'))
    .catch(err=>console.log(err))
// sequelize.authenticate()
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))
app.listen(3000,()=>console.log('listening on port 3000'))