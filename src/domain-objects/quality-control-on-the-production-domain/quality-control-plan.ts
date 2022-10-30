import { Uid } from "src/utils/uid.util";
import { ProductTracability } from "./product-tracability.value.object";
import { QualityControlCompletedList, QualityControlList } from "./quality-control-list.value.object";


export type QualityControlPlan = {
  readonly productionStage: ProductionStage;
  readonly controls: QualityControlList;
};

export type QualityControlPlanCompleted = {
  readonly id: Uid;
  readonly productionStage: ProductionStage;
  readonly controls: QualityControlCompletedList;
  readonly ProductTracability: ProductTracability;
  
};

export type ProductionStage = Filling | Labeling | Bundling | EndOfLine;

export type Filling = "Filling";
export type Labeling = "Labeling";
export type Bundling = "Bundling";
export type EndOfLine = "EndOfLine";
