import { ControlProductionStageCommand } from "../commands/control-production-command";
import { ProductionStageControled } from "../events/production-stage-controlled.event";
import { SampleControlledAtTheProductionStage } from "../events/sample-controlled-at-the-production-stage.event";
import { SampleTaked } from "../events/sample-taked.event";

export type ControlProductionStageWorkFlow = (
  controlProductionStage: ControlProductionStageCommand
) => ProductionStageControled;

export type EnterEachControlResult = (
  controlProductionStageCommand: ControlProductionStageCommand,
  sampleTaked: SampleTaked
) => SampleControlledAtTheProductionStage;


