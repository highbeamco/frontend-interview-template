import { BankAccountRep, BankAccountStatus, BankAccountType } from "api/reps/BankAccountRep";

// Please do not modify this file.

const bankAccounts: BankAccountRep[] = [
  {
    guid: "5413a549-2d93-4aed-a56e-b39716b1f950",
    businessGuid: "824c6a23-2136-43d5-8b93-b4abde350a73",
    name: "Primary",
    status: BankAccountStatus.Open,
    type: BankAccountType.Checking,
    routingNumber: "635282099",
    accountNumber: "0014088759",
  },
  {
    guid: "28feca3f-e758-4ee4-a6f1-2dc401903a07",
    businessGuid: "988cd9b1-f2a3-4dad-b518-c7c106835556",
    name: "Secondary",
    status: BankAccountStatus.Open,
    type: BankAccountType.Checking,
    routingNumber: "519253128",
    accountNumber: "1368531856",
  },
  {
    guid: "9bc79402-4b84-4427-9e6c-a805364cbfe0",
    businessGuid: "655ab233-f4da-49e1-baa3-c56bb304e589",
    name: "Travel",
    status: BankAccountStatus.Open,
    type: BankAccountType.Checking,
    routingNumber: "149241775",
    accountNumber: "4057037646",
  },
  {
    guid: "571b4c68-8a8e-4796-9606-6842bb0b62b5",
    businessGuid: "adf3f37d-373d-4116-80f4-9f191c7599df",
    name: "Inventory",
    status: BankAccountStatus.Open,
    type: BankAccountType.Checking,
    routingNumber: "363419516",
    accountNumber: "9100715175",
  },
  {
    guid: "971801cf-9af7-4d9b-be2b-d590ff86020f",
    businessGuid: "301c44f0-69e2-4ada-abe8-6c081f15f295",
    name: "High yield",
    status: BankAccountStatus.Open,
    type: BankAccountType.HighYield,
    routingNumber: "617005896",
    accountNumber: "3112170542",
  },
  {
    guid: "67d2015a-03f2-459e-abd2-028f10529279",
    businessGuid: "037c4ba6-4fcd-42e7-8396-a099d750526f",
    name: "Marketing",
    status: BankAccountStatus.Open,
    type: BankAccountType.Capital,
    routingNumber: "307960966",
    accountNumber: "8161116548",
  },
  {
    guid: "aecb166f-0400-4546-a716-b77b62b8c9e3",
    businessGuid: "83d05198-1aab-46fc-bac5-1d7301aef101",
    name: "Line of credit",
    status: BankAccountStatus.Open,
    type: BankAccountType.Capital,
    routingNumber: "280866912",
    accountNumber: "5202696719",
  },
];

export default bankAccounts;
