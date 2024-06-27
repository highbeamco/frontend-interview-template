import bankAccounts from "api/mock-data/bank-accounts";
import sleep from "utils/sleep";

import { AUTO_PAY_BANK_ACCOUNT_GUID_LOCAL_STORAGE_KEY } from "./fetchAutoPayBankAccount";

// Please do not modify this file.

const updateAutoPayBankAccount = async (autoPayBankAccountGuid: string) => {
  await sleep(3000);

  const updatedBankAccount = bankAccounts.find(
    (bankAccount) => bankAccount.guid === autoPayBankAccountGuid,
  );

  if (!updatedBankAccount) {
    throw new Error("Bank account not found");
  }

  localStorage.setItem(AUTO_PAY_BANK_ACCOUNT_GUID_LOCAL_STORAGE_KEY, autoPayBankAccountGuid);

  return updatedBankAccount;
};

export default updateAutoPayBankAccount;
