"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.main = void 0;
var CalculateBuildingValueUseCase_1 = require("../core/usecases/calculate/CalculateBuildingValueUseCase");
var ValuesAPIEntityGateway_1 = require("../data/values/ValuesAPIEntityGateway");
var ExpressApp_1 = require("../entrypoint/ExpressApp");
var CalculateBuildingValueController_1 = require("../entrypoint/web/controllers/CalculateBuildingValueController");
var CalculateRouter_1 = require("../entrypoint/web/routers/CalculateRouter");
var SwaggerRouter_1 = require("../entrypoint/web/routers/SwaggerRouter");
function main() {
    //Gateway
    var valuesEntityGateway = new ValuesAPIEntityGateway_1.ValuesAPIEntityGateway();
    //UseCases
    var calculateBuildingValueUseCase = new CalculateBuildingValueUseCase_1.CalculateBuildingValueUseCase(valuesEntityGateway);
    //Controllers
    var calculateBuildingValueController = new CalculateBuildingValueController_1.CalculateBuildingValueController(calculateBuildingValueUseCase);
    //Routers
    var calculateRouter = new CalculateRouter_1.CalculateRouter(calculateBuildingValueController);
    var swaggerRouter = new SwaggerRouter_1.SwaggerRouter();
    //App
    var app = new ExpressApp_1.ExpressApp(swaggerRouter, calculateRouter);
    app.boot();
}
exports.main = main;
