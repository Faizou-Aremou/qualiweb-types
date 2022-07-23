import { ObjectiveCriteria } from "./objective-criteria";
import { SubjectiveCriteria } from "./subjective-criteria";

export interface OrganolepticQuality{
    objectiveCriteria:ObjectiveCriteria[];
    subjectiveCriteria:SubjectiveCriteria[];
}