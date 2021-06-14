import { Request, Response } from "express";
import { UseCaseError } from "../../../core/definition/UseCaseError";
import { CalculateBuildingValueUseCase } from "../../../core/usecases/calculate/CalculateBuildingValueUseCase";
import { Controller } from "../definitions/Controller";

export class CalculateBuildingValueController extends Controller<CalculateBuildingValueUseCase> {
  async processRequest(req: Request, res: Response): Promise<Response> {
    const { amount } = req.query;
    if(amount === undefined) {
      return this.badRequest(res, "Informe um valor para 'amount'.");
    }

    const intAmount = parseInt(amount.toString());
    if(isNaN(intAmount)) {
      return this.badRequest(res, "O valou de 'amount' deve ser um numero.");
    }
    if(intAmount < 10 || intAmount > 10000) {
      return this.badRequest(res, "O valou de 'amount' deve ser um numero entre 10 e 10000.");
    }

    const result = await this.usecase.execute({ amount: intAmount });
    if(result instanceof Error) {
      return this.fail(res, result.message);
    }

    return this.success(res, result);
  }
}