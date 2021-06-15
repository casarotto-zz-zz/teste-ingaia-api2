"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwaggerRouter = void 0;
var express_1 = require("express");
var swagger_ui_express_1 = __importDefault(require("swagger-ui-express"));
var swaggerDocument = __importStar(require("../../../swagger.json"));
var SwaggerRouter = /** @class */ (function () {
    function SwaggerRouter() {
        this.router = express_1.Router();
        this.configRouter();
    }
    SwaggerRouter.prototype.configRouter = function () {
        this.router.use('/api-docs', swagger_ui_express_1.default.serve);
        this.router.get('/api-docs', swagger_ui_express_1.default.setup(swaggerDocument));
    };
    SwaggerRouter.prototype.getRouter = function () {
        return this.router;
    };
    return SwaggerRouter;
}());
exports.SwaggerRouter = SwaggerRouter;
