import { CalculateBuildingValueUseCase } from "../core/usecases/calculate/CalculateBuildingValueUseCase";
import { ValuesAPIEntityGateway } from "../data/values/ValuesAPIEntityGateway";
import { ExpressApp } from "../entrypoint/ExpressApp";
import { CalculateBuildingValueController } from "../entrypoint/web/controllers/CalculateBuildingValueController";
import { CalculateRouter } from "../entrypoint/web/routers/CalculateRouter";
import { SwaggerRouter } from "../entrypoint/web/routers/SwaggerRouter";

export function main() {
  //Gateway
  const valuesEntityGateway = new ValuesAPIEntityGateway();

  //UseCases
  const calculateBuildingValueUseCase = new CalculateBuildingValueUseCase(valuesEntityGateway);

  //Controllers
  const calculateBuildingValueController = new CalculateBuildingValueController(calculateBuildingValueUseCase);

  //Routers
  const calculateRouter = new CalculateRouter(calculateBuildingValueController);
  const swaggerRouter = new SwaggerRouter();

  //App
  const app = new ExpressApp(swaggerRouter, calculateRouter);
  app.boot();
}