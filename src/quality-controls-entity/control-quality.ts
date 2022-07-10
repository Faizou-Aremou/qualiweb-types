import { Analysis } from "./analysis";

export interface ControlQuality {
  getNumberOfControl():number;
  getControls(): Array<Analysis>;
  addMeasure(analysis:Analysis, date:Date):void;
}
