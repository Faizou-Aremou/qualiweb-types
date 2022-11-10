import { CompletedQualityControlPlan } from "../value-objects/quality-control-plan.value.object";

export type SampleControlledAtTheProductionStage = {
  readonly qualityControlPlanCompleted: CompletedQualityControlPlan;
};
