export type SampleMeasure = {
   readonly date: Date;
   readonly measures:ReadonlyArray<QualityControlUnit>;
   readonly average:number;
}

export type QualityControlUnit = Brix | CO2Degree;

export type Brix = number & {__brand:"Brix"};
export type CO2Degree = number & {__brand:"CO2Degree"};