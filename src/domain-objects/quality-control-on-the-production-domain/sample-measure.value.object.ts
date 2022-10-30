export type SampleMeasure = {
   readonly date: Date;
   readonly measures:ReadonlyArray<number>;
   readonly average:number;
   readonly standardDeviation:number
}