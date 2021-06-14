import { Router } from "express";
import swaggerUi from 'swagger-ui-express';

import * as swaggerDocument from '../../../swagger.json';
import BaseRouter from "../definitions/BaseRouter";

export class SwaggerRouter implements BaseRouter {
  private router: Router;

  constructor(
  ) {
    this.router = Router();
    this.configRouter();
  }

  private configRouter() {
    this.router.use('/api-docs', swaggerUi.serve);
    this.router.get('/api-docs', swaggerUi.setup(swaggerDocument));
  }

  public getRouter() {
    return this.router
  }
}