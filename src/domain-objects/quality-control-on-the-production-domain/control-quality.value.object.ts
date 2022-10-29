import { AttributeControlCard } from "./attribute-control-card.value.object";
import { MeasurementControlCard } from "./measurement-control-card.value.object";
import { QualityControlCharacteristic } from "./quality-characteristic.value.object";

export type QualityControl = {
  readonly qualityControlCriteria: QualityControlCharacteristic;
  readonly qualityControlCard: QualityControlCard;
}

export type QualityControlCard = AttributeControlCard | MeasurementControlCard