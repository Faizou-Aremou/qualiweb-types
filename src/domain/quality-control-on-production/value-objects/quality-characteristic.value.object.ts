export type QualityControlCharacteristic = {
  readonly name: QualityControlName;
  readonly type: QualityControlType;
};

export type QualityControlName = string & { __brand: "QualityControlName" };
export function theQualityControlName(name: string): QualityControlName {
  return name as QualityControlName;
}
export type QualityControlType = PhysicoChemical | Microbiological;

export type PhysicoChemical = "PhysicoChemical";
export type Microbiological = "Microbiological";
