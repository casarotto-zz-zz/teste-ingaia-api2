"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CalculateRouter = void 0;
var express_1 = require("express");
var CalculateRouter = /** @class */ (function () {
    function CalculateRouter(calculateBuildingValueController) {
        this.calculateBuildingValueController = calculateBuildingValueController;
        this.router = express_1.Router();
        this.configRouter();
    }
    CalculateRouter.prototype.configRouter = function () {
        var _this = this;
        this.router.get('/api/v1/calculate', function (req, res) { return _this.calculateBuildingValueController.processRequest(req, res); });
    };
    CalculateRouter.prototype.getRouter = function () {
        return this.router;
    };
    return CalculateRouter;
}());
exports.CalculateRouter = CalculateRouter;
