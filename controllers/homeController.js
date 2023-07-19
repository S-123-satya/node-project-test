const path = require('path');
module.exports.homeController=(req,res)=>{
    res.sendFile(path.join(__dirname,'..','index.html'))
};