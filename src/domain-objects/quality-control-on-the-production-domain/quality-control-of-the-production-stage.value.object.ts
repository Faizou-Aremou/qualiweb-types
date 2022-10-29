import { Minute } from "src/utils/minutes.util";
import { QualityControlPlan } from "./quality-control-plan.value.object";

export type QualityControlOfTheProductionStage = {
    readonly optimalControlTimeFrequency: Minute;
    readonly qualityControlPlan: QualityControlPlan;
  };
  