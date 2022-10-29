import { Code } from "../../utils/code";
import { Product } from "./product.value.object";
import { ProductionLine } from "./production-line.value.object";

export type ProductTracability = {
    readonly product:Product;
    readonly productionline: ProductionLine,
    readonly lot: Code, 
    readonly productionOrder: Code,
}



