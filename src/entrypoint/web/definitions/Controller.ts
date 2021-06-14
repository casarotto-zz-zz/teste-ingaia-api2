import { Request, Response } from "express";
import { UseCase } from "../../../core/definition/UseCase";

export abstract class Controller<T extends UseCase = UseCase>{
  protected usecase: T;

  constructor(usecase: T) {
    this.usecase = usecase;
  }

  abstract processRequest(req: Request, res: Response): Promise<Response>;

  protected success<T>(res: Response, dto?: T): Response {
    if (dto) {
      res.type("application/json");
      return res.status(200).json(dto);
    } else {
      return res.sendStatus(200);
    }
  }

  protected fail(res: Response, error: Error | string): Response {
    console.log(error);
    return res.status(500).json({
      message: error.toString()
    });
  }

  protected badRequest(res: Response, message?: string): Response {
    return Controller.jsonResponse(res, 400, { message: message || "bad requst" });
  }

  protected unauthorized(res: Response, message?: string): Response {
    return Controller.jsonResponse(res, 401, { message: message || "Unauthorized" });
  }

  protected forbidden(res: Response, message?: string): Response {
    return Controller.jsonResponse(res, 403, { message: message || "Forbidden" });
  }

  protected notFound(res: Response, message?: string): Response {
    return Controller.jsonResponse(res, 404, { message: message || "Not found" });
  }

  protected created(res: Response, payload: {} = {}): {} {
    return Controller.jsonResponse(res, 201, payload);
  }

  protected static jsonResponse(res: Response, code: number, payload: {}): Response {
    return res.status(code).json(payload);
  }
}