"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var jwt_1 = require("./auth/jwt");
var middleware = function (req, res, next) {
    var token = req.headers['access-token'];
    if (token) {
        jwt_1.Jwt.verifyToken(token).then(function (payload) {
            req.user = payload;
            next();
        }).catch(function (err) {
            return res.status(401).send({ message: 'Unauthorized' });
        });
    }
    else {
        return res.status(401).send({ message: 'Unauthorized' });
    }
};
module.exports = middleware;
