
import { Minute } from "src/utils/minutes.util";
import { QualityControlPlan } from "./quality-control-plan.entities";
import { Sample } from "./sample.entity";

export type QualityControlOfTheProductionStage = {
    readonly optimalControlTimeFrequency: Minute;
    readonly qualityControlPlan: QualityControlPlan;
    readonly sample: Sample
  };
  