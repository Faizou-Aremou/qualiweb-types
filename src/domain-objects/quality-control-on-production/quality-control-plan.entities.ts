import { Uid } from "src/utils/uid.util";
import { ProductTracability } from "./product-tracability.value.object";
import { QualityControlsCompleted, QualityControls } from "./quality-control-list.value.object";


export type QualityControlPlan = {
  readonly id: Uid;
  readonly productionStage: ProductionStage;
  readonly controls: QualityControls;
};
export type QualityControlPlans = ReadonlyArray<QualityControlPlan>;
export type QualityControlPlansCompleted = ReadonlyArray<QualityControlPlanCompleted>;
export type QualityControlPlanCompleted = {
  readonly id: Uid;
  readonly productionStage: ProductionStage;
  readonly qualityControlsCarriedOutAtProductionStage: QualityControlsCarriedOutAtProductionStage;
  readonly ProductTracability: ProductTracability;
};


export type ProductionStage = Filling | Labeling | Bundling | EndOfLine;

export type Filling = "Filling";
export type Labeling = "Labeling";
export type Bundling = "Bundling";
export type EndOfLine = "EndOfLine";
export type QualityControlsCarriedOutAtProductionStage = ReadonlyArray<QualityControlsCompleted>;
