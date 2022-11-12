import { OrderManufacturingId } from "./order-manufacturing.aggregate";
import {
  QualityControlPlansAtProductionStage
} from "./quality-control-plan-at-production-stage.entity";

export type ProductionInProgress = {
  readonly id: ProductionId;
  readonly orderManufacturingId: OrderManufacturingId;
  readonly QualityControlPlansInProgress: QualityControlPlansAtProductionStage;
};

export type ProductionFinished = {
  readonly id: ProductionId;
  readonly orderManufacturingId: OrderManufacturingId;
  readonly QualityControlPlansCompleted: QualityControlPlansAtProductionStage;
};

export type Production = ProductionInProgress | ProductionFinished;
export type ProductionId = string & { __brand: "ProductionId" };

export function theProductionId(id: string): ProductionId {
  return id as ProductionId;
}
