import { QualityControlPlansCompleted } from "../entities/quality-control-plan.entities";

export type ProductionStageControled = {
  readonly qualityControlPlanCompleted: QualityControlPlansCompleted;
};
