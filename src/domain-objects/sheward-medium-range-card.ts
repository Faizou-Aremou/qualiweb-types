import { SampleMeasure } from "./sample-measure";
import { ControlCardLimit } from "./control-card";

export interface ShewardMediumRangeCard extends ControlCardLimit {
    sampleMeasures: SampleMeasure[];
}