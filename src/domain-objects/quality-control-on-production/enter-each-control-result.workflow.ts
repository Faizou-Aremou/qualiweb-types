import { QualityControlPlanCompleted } from "./quality-control-plan.entities";



export type EnterEachControlResult = (controlPlan:QualityControlPlanCompleted) => ControlPlanPerfomedOnTheSampleTaked;
export type ControlPlanPerfomedOnTheSampleTaked = string & {
    __brand: "FillingTheProductionOrderCompleted";
  };