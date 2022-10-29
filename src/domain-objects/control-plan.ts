import { ControlQuality } from "./control-quality";
import { ProductTracability } from "./product-tracability";

export interface ControlPlan {
    controls:ControlQuality[];
    ProductTracability: ProductTracability
}