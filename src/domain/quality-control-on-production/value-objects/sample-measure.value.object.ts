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

export function theBrixDegree(degree: number): BrixDegree {
  if (degree < 0) {
    throw new Error("Degree must be superior to zero");
  }
  return degree as BrixDegree;
}

export type CO2Degree = number & { __brand: "CO2Degree" };

export function theCO2Degree(degree: number): CO2Degree {
  if (degree < 0) {
    throw new Error("Degree must be superior to zero");
  }
  return degree as CO2Degree;
}

export type MolesPerLiter = number & { __brand: "MolesPerLiter" };

export function theMolesPerLiter(molesPerLiter: number): MolesPerLiter {
  if (molesPerLiter < 0) {
    throw new Error("Degree must be superior to zero");
  }
  return molesPerLiter as MolesPerLiter;
}

export type NewtonMeter = number & { __brand: "NewtonMeter" };

export function theNewtonMeter(newtonMeter: number): NewtonMeter {
  if (newtonMeter < 0) {
    throw new Error("Degree must be superior to zero");
  }
  return newtonMeter as NewtonMeter;
}
