import { Code } from "../../utils/code.util";
import { Designation } from "../../utils/designation.util";
import { QualityControlPlans } from "./quality-control-plan.entities";

export type Product = {
    readonly reference: Code;
    readonly designation:Designation;
    readonly brandName: Designation,
    readonly qualityControlPlan: QualityControlPlans;
}