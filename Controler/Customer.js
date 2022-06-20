const Customer = require('../models/Customer');
const Identifier = require('../models/Identifier');

const createCustomer = (name,age,gender)=>{
const customer = new Customer({
    name,age,gender
})
return customer.save()
};


const createIdentifier = (cardCode,customer)=>{
    const identifier = new Identifier({
        cardCode,customer
    })
    return identifier.save()
};
const showAllIdentifier = async function() {
    const identifiers = await Identifier.find().populate("customer");
    console.log("> All Identifiers\n", identifiers);
  };

module.exports = {createCustomer,createIdentifier,showAllIdentifier};