export type Operator = {
  readonly id: OperatorId;
  readonly firstName: string;
  readonly LastName: string;
};

export type OperatorId = string & { __brand: "OperatorId" };

export function theOperatorId(id: string): OperatorId {
  return id as OperatorId;
}
