import { OrderManufacturingId } from "./order-manufacturing.aggregate";
import { CompletedQualityControlPlans } from "./quality-control-completed.entity";

export type StartedProduction = {
  readonly id: ProductionId;
  readonly orderManufacturingId: OrderManufacturingId;
};

export type FinishedProduction = {
  readonly id: ProductionId;
  readonly orderManufacturingId: OrderManufacturingId;
  readonly completedQualityControlPlan: CompletedQualityControlPlans;
};

export type Production = StartedProduction | FinishedProduction;
export type ProductionId = string & { __brand: "ProductionId" };

export function theProductionId(id: string): ProductionId {
  return id as ProductionId;
}
