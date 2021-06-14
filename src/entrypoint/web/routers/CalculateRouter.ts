import { Request, Response, Router } from "express";
import { CalculateBuildingValueController } from "../controllers/CalculateBuildingValueController";
import BaseRouter from "../definitions/BaseRouter";

export class CalculateRouter implements BaseRouter {
  private router: Router;

  constructor(
    private calculateBuildingValueController: CalculateBuildingValueController
  ) {
    this.router = Router();
    this.configRouter();
  }

  private configRouter() {
    this.router.get('/api/v1/calculate', (req: Request, res: Response) => this.calculateBuildingValueController.processRequest(req, res));
  }

  public getRouter() {
    return this.router
  }
}