import { AttributeControlCard } from "./attribute-control-card";
import { Frequency } from "./frequency";
import { MeasurementControlCard } from "./measurements-control-card";
import { QualityCharacteristic } from "./quality-criteria";

export interface ControlQuality {
  qualityCriteria: QualityCharacteristic;
  controlCard: AttributeControlCard | MeasurementControlCard;
}
