import { Code } from "../../utils/code";
import { Designation } from "../../utils/designation";
import { Packaging } from "./packaging.value.object";
import { Price } from "../../utils/price";
import { ProductStorage } from "./product-storage.value.object";
import { ProductionMethod } from "./production-method.value.object";

export type Product = {
    readonly designation:Designation;
    readonly brandName: Designation,
    readonly reference: Code;
    readonly productionMethod: ProductionMethod;
    readonly packaging: Packaging;
    readonly cost: Price;
    readonly storage: ProductStorage;
}