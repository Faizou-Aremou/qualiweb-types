import { SampleMeasure } from "./sample-measure.value.object";
import { ControlCardLimit } from "./control-card.value.object";

export type ShewardMediumRangeCard = ControlCardLimit & {
    sampleMeasures: SampleMeasure[];
}