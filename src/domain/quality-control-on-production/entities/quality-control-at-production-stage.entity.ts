import {
  AttributeControlCardInProgress,
  AttributeControlCardCompleted,
} from "../value-objects/attribute-control-card.value.object";
import {
  MeasurementControlCardCompleted,
  MeasurementControlCardInProgress,
} from "../value-objects/measurement-control-card.value.object";
import { QualityControlCharacteristic } from "../value-objects/quality-characteristic.value.object";

export type QualityControlInProgressOnSample = {
  readonly id: QualityControlOnSampleId;
  readonly qualityControlCharacteristic: QualityControlCharacteristic;
  readonly qualityControlCardInProgress: QualityControlCardInProgress;
};

export type QualityControlCompletedOnSample = {
  readonly id: QualityControlOnSampleId;
  readonly qualityControlCharacteristic: QualityControlCharacteristic;
  readonly qualityControlCardCompleted: QualityControlCardCompleted;
};

export type QualityControlOnSample =
  | QualityControlInProgressOnSample
  | QualityControlCompletedOnSample;

export type QualityControlOnSampleId = string & {
  __brand: "QualityControlOnSampleId";
};

export function theQualityControlOnSampleId(
  id: string
): QualityControlOnSampleId {
  return id as QualityControlOnSampleId;
}

export type QualityControlsOnSamples = ReadonlyArray<QualityControlOnSample>;

export type QualityControlCardCompleted =
  | AttributeControlCardCompleted
  | MeasurementControlCardCompleted;

export type QualityControlCardInProgress =
  | AttributeControlCardInProgress
  | MeasurementControlCardInProgress;
