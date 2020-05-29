'use strict'
const authRoutes = require('./auth/auth.routes');
const  express = require('express');
const properties = require('./config/properties');
const DB = require('./config/db');

//init DB
DB();

const app = express();
const router = express.Router();
app.use('/api',router);
authRoutes(router);

router.get('/',(req,resp)=>{

resp.send('Hello from home');

});

app.use(router);


app.listen(properties.PORT,()=> console.log(`Server running on port ${properties.PORT}`)) ;
