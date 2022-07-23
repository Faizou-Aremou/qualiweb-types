import { QualityCriteria } from "./quality-criteria";

export interface ObjectiveCriteria extends QualityCriteria {
    nominalValue: number;
    lowToleranceThreshold: number;
    highToleranceThreshold: number;
}