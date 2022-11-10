import { Code } from "../../../utils/code.util";
import { Designation } from "../../../utils/designation.util";
import { QualityControlPlans } from "../value-objects/quality-control-plan.value.object";

export type Product = {
  readonly reference: Code;
  readonly designation: Designation;
  readonly brandName: Designation;
  readonly qualityControlPlans: QualityControlPlans;
};
