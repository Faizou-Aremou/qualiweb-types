import {
  CompletedAttributeControlCard,
} from "../value-objects/attribute-control-card.value.object";
import {
  CompletedMeasurementControlCard,
} from "../value-objects/measurement-control-card.value.object";
import { QualityControlCharacteristic } from "../value-objects/quality-characteristic.value.object";


export type CompletedQualityControl = {
  readonly id: CompletedQualityControlId;
  readonly qualityControlCriteria: QualityControlCharacteristic;
  readonly completedQualityControlCard: CompletedQualityControlCard;
};

export type CompletedQualityControlId = string & {
  __brand: "CompletedQualityControlId";
};

export function theCompletedQualityControlId(id: string): CompletedQualityControlId {
  return id as CompletedQualityControlId;
}
export type CompletedQualityControls = ReadonlyArray<CompletedQualityControl>;
export type CompletedQualityControlCard =
  | CompletedAttributeControlCard
  | CompletedMeasurementControlCard;
