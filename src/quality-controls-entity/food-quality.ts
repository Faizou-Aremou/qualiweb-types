import { ControlQuality } from "./control-quality";
import { FoodPhysicalQuality } from "./food-physical-quality";
import { NutritionalQuality } from "./nutritional-quality";
import { OrganolepticQuality } from "./organoleptic-quality";
import { ProductTracability } from "./product-tracability";
import { ControlPlan } from "./control-plan";
import { Product } from "./product";

export interface FoodQuality<P extends Product> extends FoodPhysicalQuality, OrganolepticQuality, NutritionalQuality {
    product: P;
    createControlPlan(controls:ControlQuality[],  ProductTracability: ProductTracability ):ControlPlan
}