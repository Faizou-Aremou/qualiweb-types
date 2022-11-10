import { ProductTracability } from "../value-objects/product-tracability.value.object";
import { ProductionStage } from "../value-objects/production-stage.value.object";
import { CompletedQualityControls } from "./completed-quality-control.entity";


export type CompletedQualityControlPlan = {
  readonly id: CompletedQualityControlPlanId;
  readonly productionStage: ProductionStage;
  readonly qualityControlsCarriedOutAtProductionStage: QualityControlsCarriedOutAtProductionStage;
  readonly ProductTracability: ProductTracability;
};
export type QualityControlsCarriedOutAtProductionStage =
  ReadonlyArray<CompletedQualityControls>;

export type CompletedQualityControlPlanId = string & {
  __brand: "CompletedQualityControlPlanId";
};

export function theQualityControlPlanId(
  id: string
): CompletedQualityControlPlanId {
  return id as CompletedQualityControlPlanId;
}
export type CompletedQualityControlPlans =
  ReadonlyArray<CompletedQualityControlPlan>;
