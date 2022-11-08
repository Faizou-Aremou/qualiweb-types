import { Operator } from "./operator.entity";

export type Sample = {
  readonly id: SampleId;
  readonly sampleSize: SampleSize;
  readonly operator: Operator;
};

export type SampleId = string & { __brand: "SampleId" };

export function theSampleId(id: string): SampleId {
  return id as SampleId;
}

export type SampleSize = number & { __brand: "SampleSize" };

export function theSampleSize(size: number): SampleSize {
  if (size < 0) {
    throw new Error("size must be superior to zero");
  }
  return size as SampleSize;
}
