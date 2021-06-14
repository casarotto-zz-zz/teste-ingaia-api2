import axios, { AxiosInstance } from "axios";
import { Value } from "../../core/entities/Value";
import { ValuesEntityGateway } from "../../core/usecases/calculate/ValuesEntityGateway";

export class ValuesAPIEntityGateway implements ValuesEntityGateway {
  private axios: AxiosInstance;

  constructor() {
    this.axios = axios.create({
      baseURL: process.env.API1_BASE_URL
    });
  }

  async getDefaultMetricsValue(): Promise<Value | undefined> {
    try {
      const response = await this.axios.get('/api/v1/metrics/default');
      return response.data;
    }
    catch (err) {
      return undefined;
    }
  }
}