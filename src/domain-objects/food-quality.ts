import { ControlQuality } from "./control-quality";
import { ProductTracability } from "./product-tracability";
import { ControlPlan } from "./control-plan";
import { Product } from "./product";

export interface FoodQuality {
    product: Product;
    createControlPlan(controls:ControlQuality[],  ProductTracability: ProductTracability ):ControlPlan
}