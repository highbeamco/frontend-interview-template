import bankAccountBalances from "api/mock-data/bank-account-balances";
import { BankAccountBalanceRep } from "api/reps/BankAccountBalanceRep";
import sleep from "utils/sleep";

// Please do not modify this file.

const fetchBankAccountBalance = async (bankAccountGuid: string): Promise<BankAccountBalanceRep> => {
  await sleep(3000);
  return bankAccountBalances.find(
    (bankAccountBalance) => bankAccountBalance.bankAccountGuid === bankAccountGuid,
  )!;
};

export default fetchBankAccountBalance;
