import { Minute } from "src/utils/minutes.util";
import { ControlProductionStageCommand } from "../commands/control-production.command";
import { StopControlProductionStageCommand } from "../commands/stop-control-production-stage.command";
import { QualityControlPlanInProgressAtProductionStage } from "../entities/quality-control-plan-at-production-stage.entity";
import { ProductionStageControled } from "../events/production-stage-controlled.event";
import { SampleMeasuresTaked } from "../events/sample-measures-taked.event";
import { SampleTaked } from "../events/sample-taked.event";
import { QualityControlPlan } from "../value-objects/quality-control-plan.value.object";

export type ControlProductionStageWorkFlow = (
  controlProductionStage: ControlProductionStageCommand
) => ProductionStageControled;

export type SaveEachControlMesures = (
  takeSampleMeasures: TakeSampleMeasures, // steps
  optimalControlTimeFrequency: Minute // loops
) => ControlMeasuresOnTheSampleStopper; // loops stopper

export type TakeSampleMeasures = (
  sampleTaked: SampleTaked,
  qualityControlPlan: QualityControlPlan
) => SampleMeasuresAccumulator;

export type SampleMeasuresAccumulator = (
  sampleMeasuresTaked: SampleMeasuresTaked,
  qualityControlPlanInProgressAtProductionStage: QualityControlPlanInProgressAtProductionStage
) => QualityControlPlanInProgressAtProductionStage;

export type ControlMeasuresOnTheSampleStopper = (
  stopControlProductionStageCommand: StopControlProductionStageCommand
) => ProductionStageControled;
