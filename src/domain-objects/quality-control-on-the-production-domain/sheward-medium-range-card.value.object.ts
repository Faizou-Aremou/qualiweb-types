import { ControlCardLimit } from "./control-card.value.object";
import { SampleMeasures } from "./sample-measures.value.object";

export type ShewardMediumRangeCard = ControlCardLimit & {
   readonly measures: SampleMeasures;
}