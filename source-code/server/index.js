"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var bodyParser = require("body-parser");
var routes = require('./routes');
var cors = require("cors");
var config_1 = require("./config/config");
var Connection_1 = require("./db/Connection");
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors(config_1.config.application.cors.server));
app.use('/', routes);
var connection = new Connection_1.Connection();
//console.log(`${config.application.db_server.host}`);
connection.get('adminUsers').then(function () {
    app.listen(3000, function () {
        console.log("server listening port: 3000");
    });
});
