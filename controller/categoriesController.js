
const { bollywood, hollywood, Technology, Food, Fitness } = require("../dummy");

const bollywoodcon=(req,res)=>{
return res.send(bollywood)
}


module.exports={bollywoodcon}