import { AnalysisName } from "./analysis-name.enum";
import { AnalysisType } from "./analysis-type.enum";

export interface Analysis{
    name:AnalysisName;
    type:AnalysisType;
    nominalValue:string | number;
    lowToleranceThreshold: string | number;
    highToleranceThreshold: string | number;
}