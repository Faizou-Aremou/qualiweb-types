export type SampleMeasure = {
  readonly date: Date;
  readonly measures: ReadonlyArray<QualityControlUnits>;
  readonly average: number;
};

export type PhysicalAndChemicalQualityControlUnits = BrixDegree | CO2Degree;
export type MicrobiologicalQualityControlUnits = undefined;
export type QualityControlUnits =
  | PhysicalAndChemicalQualityControlUnits
  | MicrobiologicalQualityControlUnits;

export type BrixDegree = number & { __brand: "BrixDegree" };
export type CO2Degree = number & { __brand: "CO2Degree" };
export type MolesPerLiter = number & { __brand: "MolesPerLiter" };
export type NewtonMeter = number & { __brand: "NewtonMeter" };
