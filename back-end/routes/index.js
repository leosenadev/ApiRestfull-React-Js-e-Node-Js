
var express = require('express');
const functions = require('../database/functions');
var router = express.Router();


router.get('/clientes', async function(req, res, next) {
 
 
  try {
 
    const data = await functions.getAll("users")
    res.status(200).send(data)
    
  } catch (err) {
     next(err);
  }
 

});
router.get('/cliente/:id', async function(req, res, next) {
 
 
  try {

  
    const id = req.params.id;
    const data = await functions.getOne("users",id)
    res.status(200).send(data)

    
  } catch (err) {
    next(err);
  }
 


});


router.get('/oportunidades/:id', async function(req, res, next) {
 
 
  try {

  
    const id = req.params.id; ///email
    const data = await functions.getOne("opportunities",id)
    res.status(200).send(data)

    
  } catch (err) {
    next(err);
  }
 


});

router.put('/update/:key', async function(req,res,next){

  try{

    const key = req.params.key; //email
    const vl = req.body; //valor
    const data = await functions.update("opportunities",key,vl)
    res.status(201).send(data)

  }catch(err){
    next(err)
  }

})

module.exports = router;
