import { QualityControlList } from "./control-quality-list.value.object";


export type QualityControlPlan = {
  readonly productionStage: ProductionStage;
  readonly controls: QualityControlList;
};

export type ProductionStage = Filling | Labeling | Bundling | EndOfLine;

export type Filling = "Filling";
export type Labeling = "Labeling";
export type Bundling = "Bundling";
export type EndOfLine = "EndOfLine";
