import { Code } from "../../utils/code.util";
import { Designation } from "../../utils/designation.util";
import { Packaging } from "./packaging.value.object";
import { ProductionMethod } from "./production-method.value.object";
import { QualityControlPlans } from "./quality-control-plan";

export type Product = {
    readonly designation:Designation;
    readonly brandName: Designation,
    readonly reference: Code;
    readonly productionMethod: ProductionMethod;
    readonly qualityControlPlan: QualityControlPlans;
    readonly packaging: Packaging;
}