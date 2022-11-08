import { OrderManufacturingId } from "./order-manufacturing.aggregate";
import { QualityControlPlansCompleted } from "./quality-control-plan.entities";

export type Production = {
  readonly id: ProductionId;
  readonly orderManufacturingId: OrderManufacturingId;
  readonly qualityControlPlanCompleted: QualityControlPlansCompleted;
};

export type ProductionId = string & { __brand: "ProductionId" };

export function theProductionId(id: string): ProductionId {
  return id as ProductionId;
}
