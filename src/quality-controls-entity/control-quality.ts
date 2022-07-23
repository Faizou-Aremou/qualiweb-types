import { QualityCriteria } from "./quality-criteria";

export interface ControlQuality {
  qualityCriteria:QualityCriteria;
  getNumberOfControl():number;
  getControls(): Array<QualityCriteria>;
  addMeasure(qualityCriteria:QualityCriteria, date:Date):void;
}
