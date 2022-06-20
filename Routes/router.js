const express = require('express');
const router = express.Router();
const Customer = require('../Controler/Customer');

router.post('/',(req,res)=>{
  try {
        const data =  Customer.createCustomer(req.body.name,req.body.age,req.body.gender);
        if(data){
            var customerId = data._id.toString();
            res.json(data);
            console.log(data);
            console.log(customerId);
        }
       

        const identifierData = Customer.createIdentifier(customerId.subString(0,10),data);

    }
    catch(error)
    {
        res.json({message:error});
    }

   
});
router.get('/',(req,res)=>{
    Customer.showAllIdentifier().then(data=>{
        res.json(data);
    }   ).catch(error=>{       
        res.json({message:error});
    }           
    );
});
module.exports = router;