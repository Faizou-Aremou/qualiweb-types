import { QualityControlPlanInProgress } from "./quality-control-plan-in-progress.aggregate";


export type EnterEachControlResult = (controlPlan:QualityControlPlanInProgress) => ControlPlanPerfomedOnTheSampleTaked;
export type ControlPlanPerfomedOnTheSampleTaked = string & {
    __brand: "FillingTheProductionOrderCompleted";
  };