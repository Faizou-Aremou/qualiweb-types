import { Uid } from "src/utils/uid.util";
import { QualityControlPlansCompleted } from "./quality-control-plan.entities";

export type Production = {
    readonly id: Uid,
    readonly orderManufacturingId:Uid,
    readonly qualityControlPlanCompleted: QualityControlPlansCompleted;
}