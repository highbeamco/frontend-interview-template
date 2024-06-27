import bankAccounts from "api/mock-data/bank-accounts";
import { BankAccountRep } from "api/reps/BankAccountRep";
import sleep from "utils/sleep";

// Please do not modify this file.

export const AUTO_PAY_BANK_ACCOUNT_GUID_LOCAL_STORAGE_KEY = "autoPayBankAccountGuid";

const DEFAULT_AUTO_PAY_BANK_ACCOUNT_GUID = bankAccounts[0].guid;

const fetchAutoPayBankAccount = async (): Promise<BankAccountRep> => {
  await sleep(3000);

  const storedAutoPayBankAccountGuid = localStorage.getItem(
    AUTO_PAY_BANK_ACCOUNT_GUID_LOCAL_STORAGE_KEY,
  );

  if (!storedAutoPayBankAccountGuid) {
    localStorage.setItem(
      AUTO_PAY_BANK_ACCOUNT_GUID_LOCAL_STORAGE_KEY,
      DEFAULT_AUTO_PAY_BANK_ACCOUNT_GUID,
    );
  }

  const autoPayBankAccountGuid =
    localStorage.getItem(AUTO_PAY_BANK_ACCOUNT_GUID_LOCAL_STORAGE_KEY) ??
    DEFAULT_AUTO_PAY_BANK_ACCOUNT_GUID;

  const autoPayBankAccount = bankAccounts.find(
    (bankAccount) => bankAccount.guid === autoPayBankAccountGuid,
  );

  if (!autoPayBankAccount) {
    // Should never happen...
    throw new Error("Auto pay bank account not found");
  }

  return autoPayBankAccount;
};

export default fetchAutoPayBankAccount;
