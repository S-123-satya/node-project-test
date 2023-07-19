const path = require('path');
module.exports.homeController=(req,res)=>{
    console.log(__dirname);
    res.sendFile(path.join(__dirname,'..','index.html'))
};