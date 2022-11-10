import { CompletedQualityControlPlans } from "../value-objects/quality-control-plan.value.object";

export type ProductionStageControled = {
  readonly qualityControlPlanCompleted: CompletedQualityControlPlans;
};
