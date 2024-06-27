import bankAccounts from "api/mock-data/bank-accounts";
import { BankAccountRep } from "api/reps/BankAccountRep";
import sleep from "utils/sleep";

// Please do not modify this file.

const fetchBankAccounts = async (): Promise<BankAccountRep[]> => {
  await sleep(3000);
  return bankAccounts;
};

export default fetchBankAccounts;
