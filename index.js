const express = require('express');
const path = require('path');
const sequelize = require('./util/database');
const bodyParser = require('body-parser');
const cors = require('cors');
// const { table } = require('console');
const app=express();

const homeRoutes = require('./routers/homeRoutes');
const productRoutes = require('./routers/productRoutes');

app.use(cors());
app.use(express.static(path.join(__dirname,'public')));
app.use(bodyParser.json());

console.log(typeof(homeRoutes));

app.use('/',homeRoutes)
app.use('/product',productRoutes)

// const obj={
//     item:'fb',
//     price:43,
//     category:'food'
// }
// Product.create(obj)
//     .then(result=>console.log(result+'successful'))
//     .catch(err=>console.log(err))
// for create new table no matter it is present or not
// Product.sync({force:true})
//     .then(result=>console.log(result+'successful'))
//     .catch(err=>console.log(err))
// for testing authentication
// sequelize.authenticate()
//     .then(res=>console.log(res))
//     .catch(err=>console.log(err))
app.listen(3000,()=>console.log('listening on port 3000'))