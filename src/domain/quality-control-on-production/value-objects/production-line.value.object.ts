export type ProductionLine = number & { __brand: "ProductionLine" };

export function theProductionLine(line: number): ProductionLine {
    if (line < 0) {
        throw new Error("Production line must be superior to zero");
      }
    return line as ProductionLine;
  }