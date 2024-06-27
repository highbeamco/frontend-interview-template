#!/usr/bin/env node --no-warnings=ExperimentalWarning --loader ts-node/esm

import { faker } from "@faker-js/faker";
import { BankAccountDetailsRep } from "../src/api/reps/BankAccountDetailsRep";
import { BankAccountStatus } from "../src/api/reps/BankAccountRep";

const createFakeBankAccount = (): BankAccountDetailsRep => {
  return {
    guid: faker.string.uuid(),
    businessGuid: faker.string.uuid(),
    name: faker.finance.accountName(),
    status: BankAccountStatus.Open,
    availableBalanceInCents: faker.number.int({ min: 1000_00, max: 1_000_000_00 }),
    routingNumber: faker.finance.routingNumber(),
    accountNumber: faker.finance.accountNumber(10),
  };
};

for (let i = 0; i < 10; i++) {
  console.log(createFakeBankAccount());
}
