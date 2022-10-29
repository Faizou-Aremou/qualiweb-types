export type Code = string & { __brand: "EmailAdress" }; // this allows to keep constructor private

export function createCode(code: string): Code { // smart constructor
  if (!/^\d{10}$/.test(code)) {
    throw Error("code is invalid");
  }
  return code as Code
}

