import { OrderManufacturingId } from "../entities/order-manufacturing.aggregate";
import { ProductionLine } from "./production-line.value.object";

export type ProductTracability = {
  readonly productionline: ProductionLine;
  readonly orderManufacturingId: OrderManufacturingId;
};
