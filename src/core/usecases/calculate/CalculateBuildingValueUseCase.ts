import { UseCase } from "../../definition/UseCase";
import { UseCaseError } from "../../definition/UseCaseError";
import { ValuesEntityGateway } from "./ValuesEntityGateway";

interface CalculateBuildingValueRequestDTO {
  amount: number;
}

interface CalculateBuildingValueResponseDTO {
  value: number;
}

export class CalculateBuildingValueUseCase implements UseCase<CalculateBuildingValueRequestDTO, CalculateBuildingValueResponseDTO> {
  constructor(private valuesEntityGateway: ValuesEntityGateway) { }

  async execute(request: CalculateBuildingValueRequestDTO): Promise<CalculateBuildingValueResponseDTO | UseCaseError> {
    const { amount } = request;
    const value = await this.valuesEntityGateway.getDefaultMetricsValue();
    if(value === undefined) {
      return new UseCaseError('Erro ao se comunicar com API1.');
    }
    const { valuePerUnity } = value;

    return { value: amount * valuePerUnity };
  }
}