import express, { Application } from 'express';
import cors from 'cors';
import { CalculateRouter } from './web/routers/CalculateRouter';
import { SwaggerRouter } from './web/routers/SwaggerRouter';

export class ExpressApp {
  private app: Application;

  constructor(
    private swaggerRouter: SwaggerRouter,
    private calculateRouter: CalculateRouter
  ) {
    this.app = express();
  }

  private configApp() {
    this.app.use(cors());
    this.app.use(express.json());
    this.app.use(express.urlencoded({ extended: true }));

    //Routers
    this.app.use(this.swaggerRouter.getRouter());
    this.app.use(this.calculateRouter.getRouter());
  }

  public boot(): Application {
    if(!this.app) {
      this.app = express();
    }

    this.configApp();

    this.app.listen(process.env.APP_PORT, () => {
      console.log(`Server up and running on port ${process.env.APP_PORT}...`);
    });

    return this.app;
  }
}