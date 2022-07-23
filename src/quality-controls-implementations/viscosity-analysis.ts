
import { AnalysisName } from "src/quality-controls-entity/analysis-name.enum";
import { AnalysisType } from "src/quality-controls-entity/analysis-type.enum";
import { ObjectiveCriteria } from "src/quality-controls-entity/objective-criteria";

export class ViscosityAnalysis implements ObjectiveCriteria{
    nominalValue: number=8;
    lowToleranceThreshold: number=6;
    highToleranceThreshold: number=8;
    name: AnalysisName=AnalysisName.Viscosity;
    type: AnalysisType=AnalysisType.Physical;

}