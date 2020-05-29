
import express=require('express'); 
import bodyParser = require("body-parser");

const routes = require('./routes');
const cors = require("cors");
import {config} from "./config/config";
import { Connection } from './db/Connection';
const app=express();
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());
app.use(cors(config.application.cors.server));
app.use('/',routes);
 
const connection = new Connection();
//console.log(`${config.application.db_server.host}`);
connection.get('adminUsers').then(()=>{
    app.listen(3000,function() {
        console.log("server listening port: 3000")
    });
})