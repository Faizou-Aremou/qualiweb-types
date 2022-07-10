import { Analysis } from "src/quality-controls-entity/analysis";
import { ObjectiveControlQuality } from "../quality-uses-cases/objective-control-quality";

export abstract class FoodPhysicalControlQuality implements ObjectiveControlQuality{
    getAverageForDay(analysis: Analysis, date: Date): number {
        throw new Error("Method not implemented.");
    }
    getAverage(analysis: Analysis): number {
        throw new Error("Method not implemented.");
    }
    standardDeviationForDay(analysis: Analysis, date: Date): number {
        throw new Error("Method not implemented.");
    }
    standardDeviation(analysis: Analysis): number {
        throw new Error("Method not implemented.");
    }
    getNumberOfControl(): number {
        throw new Error("Method not implemented.");
    }
    getControls(): Analysis[] {
        throw new Error("Method not implemented.");
    }
    addMeasure(analysis: Analysis, date: Date): void {
        throw new Error("Method not implemented.");
    }

}