"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const BaseRouter_1 = require("./BaseRouter");
const jwt = require("jsonwebtoken");
class AuthenticationRouter extends BaseRouter_1.BaseRouter {
    init() {
        this.router.get('/', this.authenticate);
    }
    authenticate(req, res, next) {
        let v = { userName: "admin2" };
        let token = jwt.sign(v, "secretKey", {
            expiresIn: "10min"
        });
        res.json({
            status: "success",
            token: token
        });
        jwt.verify(token, "secretKey", (err, decoded) => {
            console.log(decoded);
        });
    }
}
exports.AuthenticationRouter = AuthenticationRouter;
exports.default = new AuthenticationRouter().router;
