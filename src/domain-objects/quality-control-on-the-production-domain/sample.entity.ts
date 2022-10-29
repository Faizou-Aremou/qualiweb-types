import { Uid } from "../../utils/uid.util";
import { Operator } from "./operator.entity";

export type Sample = {
  readonly id: Uid;
  readonly sampleSize: SamplesSize;
  readonly operator: Operator;
};

export type SamplesSize = number & { __brand: "NumberOfSamples" };
