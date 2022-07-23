
import { QualityCriteria } from "./quality-criteria";
import { ObjectiveControlQuality } from "./objective-control-quality";

export interface FoodPhysicalControlQuality extends ObjectiveControlQuality {
    getAverageForDay(criteria: QualityCriteria, date: Date): number;
    getAverage(criteria: QualityCriteria): number;
    standardDeviationForDay(criteria: QualityCriteria, date: Date): number;
    standardDeviation(criteria: QualityCriteria): number;
    getNumberOfControl(): number;
    getCriteria(): QualityCriteria[];
    addMeasure(criteria: QualityCriteria, date: Date): void;
}