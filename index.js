const express = require('express');

const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
const app = express();
const router = require('./routes/router');
app.use(bodyParser.json());
mongoose.connect(process.env.CONN,{ useNewUrlParser: true },()=>{
    console.log('connected to mongo');
} );


app.use('/create',router);
app.use('/create',router);





app.listen(process.env.PORT||3000,()=>{
    console.log('server is running');
}
);

