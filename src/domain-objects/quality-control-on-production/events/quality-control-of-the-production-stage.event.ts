
import { Minute } from "src/utils/minutes.util";
import { QualityControlPlan } from "../entities/quality-control-plan.entities";
import { Sample } from "../entities/sample.entity";

export type QualityControlOfTheProductionStage = {
    readonly optimalControlTimeFrequency: Minute;
    readonly qualityControlPlan: QualityControlPlan;
    readonly sample: Sample
  };
  