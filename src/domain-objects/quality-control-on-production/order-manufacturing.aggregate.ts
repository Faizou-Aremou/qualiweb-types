
import { Code } from "src/utils/code.util";
import { Status } from "src/utils/status.util";
import { Uid } from "src/utils/uid.util";

export type OrderManufacturing = {
readonly id:Uid;
readonly status:Status;
readonly productReference:Code;
readonly lot: Code, 
}