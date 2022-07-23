
import { ControlQuality } from "src/quality-controls-entity/control-quality";
import { QualityCriteria } from "./quality-criteria";


export interface ObjectiveControlQuality extends ControlQuality {
  getAverageForDay(criteria: QualityCriteria, date: Date) :number;
  getAverage(criteria: QualityCriteria):number;
  standardDeviationForDay(criteria: QualityCriteria, date: Date):number;
  standardDeviation(criteria: QualityCriteria):number;
}
