// const { hollywood, bollywood } = require("../dummy");
// const {auth}=require('../middleware/auth')
const { bollywoodcon} = require("../controller/categoriesController");

const categoryRoute=require("express").Router();

categoryRoute.get("/bollywood",bollywoodcon)


module.exports=categoryRoute