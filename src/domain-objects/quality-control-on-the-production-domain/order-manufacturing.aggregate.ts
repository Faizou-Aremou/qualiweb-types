
import { Code } from "src/utils/code.util";
import { Status } from "src/utils/status.util";
import { Uid } from "src/utils/uid.util";
import { Product } from "./product.value.object";

export type OrderManufacturing = {
readonly id:Uid;
readonly status:Status;
readonly product:Product;
readonly lot: Code, 
}