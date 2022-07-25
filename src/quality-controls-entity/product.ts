import { Code } from "./code";
import { Designation } from "./designation";
import { Packaging } from "./packaging";
import { Price } from "./price";
import { ProductStorage } from "./product-storage";
import { Process } from "./production-method";

export interface Product {
    designation:Designation;
    brandName: Designation,
    reference: Code;
    process: Process;
    packaging: Packaging;
    cost: Price;
    storage: ProductStorage;
}