import { ControlCardLimit } from "./control-card.value.object";
import { SampleMeasures } from "./sample-measures.value.object";
import { Sample } from "../entities/sample.entity";

export type ShewardMediumRangeCard = ControlCardLimit

export type ShewardMediumRangeCardCompleted = ControlCardLimit & {
   readonly sample:Sample
   readonly measures: SampleMeasures;
}