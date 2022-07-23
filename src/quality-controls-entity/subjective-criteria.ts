import { QualityCriteria } from "./quality-criteria";

export interface SubjectiveCriteria extends QualityCriteria{
    nominalValue:string ;
    lowToleranceThreshold: string;
    highToleranceThreshold: string;
}