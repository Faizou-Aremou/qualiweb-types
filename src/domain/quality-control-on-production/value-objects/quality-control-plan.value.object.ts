
import { ProductionStage } from "./production-stage.value.object";
import { QualityControls } from "./quality-control.value.object";

export type QualityControlPlan = {
  readonly productionStage: ProductionStage;
  readonly controls:QualityControls;
};

export type QualityControlPlans =
  ReadonlyArray<QualityControlPlan>;




