import { Code } from "src/utils/code.util";
import { Status } from "src/utils/status.util";

export type OrderManufacturing = {
  readonly id: OrderManufacturingId;
  readonly status: Status;
  readonly productReference: Code;
  readonly lot: Code;
};
export type OrderManufacturingId = string & { __brand: "OrderManufacturingId" };

export function theOrderManufacturingId(id: string): OrderManufacturingId {
  return id as OrderManufacturingId;
}
