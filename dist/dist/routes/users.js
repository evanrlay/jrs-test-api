"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var bodyParser = require("body-parser");
var express = require("express");
var logger_1 = require("../logger/logger");
var Users = /** @class */ (function () {
    function Users() {
        this.express = express();
        this.middleware();
        this.routes();
        this.users = [];
        this.logger = new logger_1.Logger();
    }
    // Configure Express middleware.
    Users.prototype.middleware = function () {
        this.express.use(bodyParser.json());
        this.express.use(bodyParser.urlencoded({ extended: false }));
    };
    Users.prototype.routes = function () {
        var _this = this;
        // request to get all the users
        this.express.get("/users", function (req, res, next) {
            _this.logger.info("url:" + req.url);
            res.json(_this.users);
        });
        // request to get all the users by userName
        this.express.get("/users/:userName", function (req, res, next) {
            _this.logger.info("url:::::" + req.url);
            var user = _this.users.filter(function (user) {
                if (req.params.userName === user.userName) {
                    return user;
                }
            });
            res.json(user);
        });
        // request to post the user
        // req.body has object of type {firstName:"fnam1",lastName:"lnam1",userName:"username1"}
        this.express.post("/user", function (req, res, next) {
            _this.logger.info("url:::::::" + req.url);
            _this.users.push(req.body.user);
            res.json(_this.users);
        });
    };
    return Users;
}());
exports.default = new Users().express;
//# sourceMappingURL=users.js.map