import { Code } from "./code";
import { Operator } from "./operator";
import { Product } from "./product";
import { ProductionLine } from "./production-line";

export interface ProductTracability {
    product:Product;
    productionline: ProductionLine,
    operators: Array<Operator>, 
    lot: Code, 
    ProductionOrder: Code,

    addOperator(
        operator: Operator,
        operators: Array<Operator>
    ): Array<Operator>
}