import { Value } from "../../entities/Value";

export interface ValuesEntityGateway {
  getDefaultMetricsValue(): Promise<Value | undefined>;
}