import { ProductTracability } from "./product-tracability.value.object";
import { Uid } from "../../utils/uid.util";
import { QualityControlPlan } from "./quality-control-plan.value.object";
import { Sample } from "./sample.entity";
import { SampleMeasures } from "./sample-measures.value.object";

export type QualityControlPlanInProgress = {
  readonly id: Uid;
  readonly ProductTracability: ProductTracability;
} & QualityControlPlan & Sample & SampleMeasures;




