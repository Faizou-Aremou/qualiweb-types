/**
 * type control plan
 */

export abstract class ControlPlan {
  public get controls(): Array<Control> {
    return this._controls;
  }
  public get productSpecs(): ProductSpecs {
    return this._productSpecs;
  }
  constructor(
    protected readonly _tracability: ProductTracability, // informations de traçabilité liées au plan de controle
    protected readonly _productSpecs: ProductSpecs, // informations du produit en cours de control
    protected readonly _controls: Array<Control> // ensemble des contrôles à réaliser sur le produit en cours de controle
  ) {}
  get tracability(): ProductTracability {
    return this._tracability;
  }

  public controlsSize<T extends ControlPlan>(plan: T): number {
    return Object.keys(plan).length;
  }

  public addNewOperator(
    operator: string,
    productTraçability: ProductTracability
  ): ProductTracability {
    return new ProductTracability(
      productTraçability.line,
      productTraçability.reference,
      productTraçability.designation,
      productTraçability.addOperator(operator, productTraçability.operators),
      productTraçability.brand,
      productTraçability.lot,
      productTraçability.fo
    );
  }
}


/**
 * Control
 */
export abstract class Control {
  public get threshold(): number {
    return this._threshold;
  }
  constructor(private readonly _threshold: number){

  }
}

export class ProductTracability {
  public get fo(): string {
    return this._fo;
  }
  public get lot(): string {
    return this._lot;
  }
  public get brand(): string {
    return this._brand;
  }
  public get operators(): Array<string> {
    return this._operators;
  }
  public get designation(): string {
    return this._designation;
  }
  public get reference(): string {
    return this._reference;
  }
  public get line(): string {
    return this._line;
  }
  constructor(
    private readonly _line: string, //
    private readonly _reference: string, //
    private readonly _designation: string, //
    private _operators: Array<string>, //
    private readonly _brand: string, //
    private readonly _lot: string, //
    private readonly _fo: string //
  ) {}

  public addOperator(
    operator: string,
    operators: Array<string>
  ): Array<string> {
    return [...operators, operator];
  }
}

export abstract class ProductSpecs {
  constructor() {}
}

/**
 * Control quality on drinks production lines
 */

export class PurJusSpecs extends ProductSpecs {
  constructor() {
    super();
  }
}

export class FardelageControlPlan extends ControlPlan {
  constructor(
    tracability: ProductTracability,
    productSpec: ProductSpecs,
    controls: Array<Control>
  ) {
    super(tracability, productSpec, controls);
  }
}


export class TemperatureControl extends Control {
  constructor(threshold:number) {
    super(threshold);
  }
}
