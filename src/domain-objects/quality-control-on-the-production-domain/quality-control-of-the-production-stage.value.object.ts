import { Minute } from "src/utils/minutes.util";
import { QualityControlPlan } from "./quality-control-plan";

export type QualityControlOfTheProductionStage = {
    readonly optimalControlTimeFrequency: Minute;
    readonly qualityControlPlan: QualityControlPlan;
  };
  