import { FardelageControlPlan, ProductTracability, PurJusSpecs, TemperatureControl } from "./types";



describe("plan de control", () => {
  it("should create new control plan", () => {
    const traca1 = new ProductTracability(
      "5",
      "3500",
      "la tete de mouton",
      ["remi desarsse"],
      "eaton",
      "4412",
      "2240"
    );
    const purJus = new PurJusSpecs();
    const controlTemp = new TemperatureControl(35);
    const plan1 = new FardelageControlPlan(traca1, purJus, [controlTemp]);

    expect(plan1.controls[0]).toEqual(controlTemp)
  });
});
