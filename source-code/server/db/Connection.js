"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Connection = void 0;
var config_1 = require("../config/config");
var mongoose_1 = __importDefault(require("mongoose"));
var Connection = /** @class */ (function () {
    function Connection() {
        this.get = function (dbName) {
            var connectionUrl = "" + config_1.config.application.db_server.host + dbName;
            return mongoose_1.default.connect(connectionUrl, { useNewUrlParser: true });
        };
    }
    return Connection;
}());
exports.Connection = Connection;
