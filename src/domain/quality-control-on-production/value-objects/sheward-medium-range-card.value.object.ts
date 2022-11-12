import { ControlCardLimit } from "./control-card.value.object";
import { SampleMeasuresCompleted, SampleMeasuresInProgress } from "./sample-measures.value.object";
import { Sample } from "../entities/sample.entity";

export type ShewardMediumRangeCard = ControlCardLimit;

export type CompletedShewardMediumRangeCard = ControlCardLimit & {
   readonly sample:Sample;
   readonly completedMeasures: SampleMeasuresCompleted;
}
export type ShewardMediumRangeCardInProgress = ControlCardLimit & {
   readonly sample:Sample;
   readonly measuresInProgress: SampleMeasuresInProgress;
}