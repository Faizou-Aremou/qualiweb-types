import { Uid } from "../../utils/uid.util";
import { Operator } from "./operator.entity";

export type Sample = {
  readonly id: Uid;
  readonly sampleSize: SampleSize;
  readonly operator: Operator;
};

export type SampleSize = number & { __brand: "SampleSize" };
