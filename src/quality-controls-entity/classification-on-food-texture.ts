import { ObjectiveCriteria } from "./objective-criteria";
import { SubjectiveCriteria } from "./subjective-criteria";

export interface ClassificationOnFoodTexture {
    objectiveCriteria:ObjectiveCriteria[];
    subjectiveCriteria:SubjectiveCriteria[];
}