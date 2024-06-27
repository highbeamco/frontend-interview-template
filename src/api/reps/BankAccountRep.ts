export enum BankAccountStatus {
  Open = "OPEN",
  Closed = "CLOSED",
  Frozen = "FROZEN",
}

export enum BankAccountType {
  Checking = "CHECKING",
  HighYield = "HIGH_YIELD",
  Capital = "CAPITAL",
}

export type BankAccountRep = {
  readonly guid: string;
  readonly businessGuid: string;
  readonly name: string;
  readonly status: BankAccountStatus;
  readonly type: BankAccountType;
  readonly routingNumber: string;
  readonly accountNumber: string;
};
