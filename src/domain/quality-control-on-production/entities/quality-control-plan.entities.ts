import { ProductTracability } from "../value-objects/product-tracability.value.object";
import { ProductionStage } from "../value-objects/production-stage.value.object";
import {
  QualityControlsCompleted,
  QualityControls,
} from "../value-objects/quality-control-list.value.object";

export type QualityControlPlan = {
  readonly id: QualityControlPlanId;
  readonly productionStage: ProductionStage;
  readonly controls: QualityControls;
};
export type QualityControlPlans = ReadonlyArray<QualityControlPlan>;
export type QualityControlPlansCompleted =
  ReadonlyArray<QualityControlPlanCompleted>;
export type QualityControlPlanCompleted = {
  readonly id: string;
  readonly productionStage: ProductionStage;
  readonly qualityControlsCarriedOutAtProductionStage: QualityControlsCarriedOutAtProductionStage;
  readonly ProductTracability: ProductTracability;
};

export type QualityControlsCarriedOutAtProductionStage =
  ReadonlyArray<QualityControlsCompleted>;

export type QualityControlPlanId = string & { __brand: "QualityControlPlanId" };

export function theQualityControlPlanId(id: string): QualityControlPlanId {
  return id as QualityControlPlanId;
}
