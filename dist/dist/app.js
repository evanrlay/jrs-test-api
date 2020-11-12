"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var logger_1 = require("./logger/logger");
var App = /** @class */ (function () {
    function App() {
        this.express = express();
        this.middleware();
        this.logger = new logger_1.Logger();
    }
    // Configure Express middleware.
    App.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
        this.express.use(express.static(process.cwd()));
    };
    return App;
}());
exports.default = new App().express;
//# sourceMappingURL=app.js.map