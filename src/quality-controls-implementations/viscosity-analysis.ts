import { Analysis } from "src/quality-controls-entity/analysis";
import { AnalysisName } from "src/quality-controls-entity/analysis-name.enum";
import { AnalysisType } from "src/quality-controls-entity/analysis-type.enum";

export class ViscosityAnalysis implements Analysis{
    name: AnalysisName=AnalysisName.Viscosity;
    type: AnalysisType=AnalysisType.Physical;
    nominalValue: string | number=12;
    lowToleranceThreshold: string | number=8;
    highToleranceThreshold: string | number=15;


}