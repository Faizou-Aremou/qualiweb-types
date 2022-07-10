import { Analysis } from "src/quality-controls-entity/analysis";
import { ControlQuality } from "src/quality-controls-entity/control-quality";


export interface ObjectiveControlQuality extends ControlQuality {
  getAverageForDay(analysis: Analysis, date: Date) :number;
  getAverage(analysis: Analysis):number;
  standardDeviationForDay(analysis: Analysis, date: Date):number;
  standardDeviation(analysis: Analysis):number;
}
