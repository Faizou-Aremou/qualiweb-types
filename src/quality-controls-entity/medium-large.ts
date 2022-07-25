import { SampleMeasure } from "./sample-measure";

export interface SampleMeasureMediumLarge extends SampleMeasure {
    measureOnTheSample:number[];
    average:number;
    standardDeviation:number
}