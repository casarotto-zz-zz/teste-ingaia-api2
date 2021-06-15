"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Controller = void 0;
var Controller = /** @class */ (function () {
    function Controller(usecase) {
        this.usecase = usecase;
    }
    Controller.prototype.success = function (res, dto) {
        if (dto) {
            res.type("application/json");
            return res.status(200).json(dto);
        }
        else {
            return res.sendStatus(200);
        }
    };
    Controller.prototype.fail = function (res, error) {
        console.log(error);
        return res.status(500).json({
            message: error.toString()
        });
    };
    Controller.prototype.badRequest = function (res, message) {
        return Controller.jsonResponse(res, 400, { message: message || "bad requst" });
    };
    Controller.prototype.unauthorized = function (res, message) {
        return Controller.jsonResponse(res, 401, { message: message || "Unauthorized" });
    };
    Controller.prototype.forbidden = function (res, message) {
        return Controller.jsonResponse(res, 403, { message: message || "Forbidden" });
    };
    Controller.prototype.notFound = function (res, message) {
        return Controller.jsonResponse(res, 404, { message: message || "Not found" });
    };
    Controller.prototype.created = function (res, payload) {
        if (payload === void 0) { payload = {}; }
        return Controller.jsonResponse(res, 201, payload);
    };
    Controller.jsonResponse = function (res, code, payload) {
        return res.status(code).json(payload);
    };
    return Controller;
}());
exports.Controller = Controller;
