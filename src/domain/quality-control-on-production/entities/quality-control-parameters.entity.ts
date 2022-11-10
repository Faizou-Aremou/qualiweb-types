import { Minute } from "src/utils/minutes.util";
import { QualityControlPlan } from "../value-objects/quality-control-plan.value.object";

export type QualityControlParameters = {
  readonly id: QualityControlParametersId;
  readonly optimalControlTimeFrequency: Minute;
  readonly qualityControlPlan: QualityControlPlan;
};

export type QualityControlParametersId = string & {
  __brand: "QualityControlParametersId";
};

export function theQualityControlParametersId(
  id: string
): QualityControlParametersId {
  return id as QualityControlParametersId;
}
