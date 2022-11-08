import { QualityControlCharacteristic } from "../value-objects/quality-characteristic.value.object";
import { QualityControlCardCompleted } from "../value-objects/quality-control.value.object";

export type QualityControlCompleted = {
  readonly id: QualityControlCompletedId;
  readonly qualityControlCriteria: QualityControlCharacteristic;
  readonly qualityControlCard: QualityControlCardCompleted;
};

export type QualityControlCompletedId = string & {
  __brand: "QualityControlCompletedId";
};

export function theQualityControlCompletedId(
  id: string
): QualityControlCompletedId {
  return id as QualityControlCompletedId;
}
