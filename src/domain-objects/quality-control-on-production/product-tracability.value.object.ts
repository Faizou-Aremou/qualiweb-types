import { Uid } from "src/utils/uid.util";
import { ProductionLine } from "./production-line.value.object";

export type ProductTracability = {
    readonly productionline: ProductionLine,
    readonly orderManufacturingId: Uid,
}



