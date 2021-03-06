"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var crypto_1 = __importDefault(require("crypto"));
var config_1 = require("../../config/config");
var PwdHash = function (password) {
    return crypto_1.default.createHash('sha256').update("" + config_1.config.application.salt_pwd + password).digest('base64');
};
module.exports = PwdHash;
