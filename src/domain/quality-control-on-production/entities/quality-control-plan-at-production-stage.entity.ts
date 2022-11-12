import { ProductTracability } from "../value-objects/product-tracability.value.object";
import { ProductionStage } from "../value-objects/production-stage.value.object";
import { QualityControlsOnSamples } from "./quality-control-at-production-stage.entity";

export type QualityControlPlanInProgressAtProductionStage = {
  readonly id: QualityControlPlanAtProductionStageId;
  readonly productionStage: ProductionStage;
  readonly qualityControlsInProgressAtProductionStage: QualityControlsAtProductionStage;
  readonly ProductTracability: ProductTracability;
};
export type QualityControlPlanCompletedAtProductionStage = {
  readonly id: QualityControlPlanAtProductionStageId;
  readonly productionStage: ProductionStage;
  readonly qualityControlsCompletedAtProductionStage: QualityControlsAtProductionStage;
  readonly ProductTracability: ProductTracability;
};
export type QualityControlsAtProductionStage =
  ReadonlyArray<QualityControlsOnSamples>;

export type QualityControlPlanAtProductionStage =
  | QualityControlPlanInProgressAtProductionStage
  | QualityControlPlanCompletedAtProductionStage;

export type QualityControlPlanAtProductionStageId = string & {
  __brand: "QualityControlPlanAtProductionStageId";
};

export function theQualityControlPlanAtProductionStageId(
  id: string
): QualityControlPlanAtProductionStageId {
  return id as QualityControlPlanAtProductionStageId;
}

export type QualityControlPlansAtProductionStage =
  ReadonlyArray<QualityControlPlanAtProductionStage>;
