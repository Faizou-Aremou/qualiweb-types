import { Command } from "src/utils/command.utils";
import { QualityControlParameters } from "../entities/quality-control-parameters.entity";

export type ControlProductionStageCommand = Command<QualityControlParameters>;