import { USD } from "@dinero.js/currencies";
import { useQuery, useSuspenseQuery } from "@tanstack/react-query";
import fetchAutoPayBankAccount from "api/mock-requests/fetchAutoPayBankAccount";
import fetchBankAccountBalance from "api/mock-requests/fetchBankAccountBalance";
import { dinero } from "dinero.js";
import { Suspense } from "react";
import AccountDisplay from "ui/AccountDisplay";
import AccountIcon from "ui/AccountIcon";
import Button from "ui/Button";
import HighlightCard from "ui/HighlightCard";
import { formatUsd } from "utils/money/formatters";

const BankAccountBalance = ({ bankAccountGuid }: { bankAccountGuid: string }) => {
  const { data } = useSuspenseQuery({
    queryKey: ["bankAccountBalance", { bankAccountGuid }],
    queryFn: () => fetchBankAccountBalance(bankAccountGuid),
  });

  return <>Balance: {formatUsd(dinero({ amount: data.availableBalanceInCents, currency: USD }))}</>;
};

const HomeHighlightCardAutoPayItem = () => {
  const { data, isPending, isError } = useQuery({
    queryKey: ["autoPayBankAccount"],
    queryFn: () => fetchAutoPayBankAccount(),
  });

  if (isError) {
    return <div>Error</div>;
  }

  return (
    <HighlightCard.Item
      label="Auto-pay account"
      value={
        isPending ? (
          <HighlightCard.Item.ValueShimmer />
        ) : (
          <AccountDisplay
            iconSize={20}
            icon={<AccountIcon type="highbeam-account" />}
            accountName={data.name}
            accountNumber={data.accountNumber}
          />
        )
      }
      subtext={
        isPending ? (
          <HighlightCard.Item.SubtextShimmer />
        ) : (
          <Suspense fallback={<HighlightCard.Item.SubtextShimmer />}>
            <BankAccountBalance bankAccountGuid={data.guid} />
          </Suspense>
        )
      }
    />
  );
};

const HomeHighlightCard = () => {
  return (
    <HighlightCard
      body={<HomeHighlightCardAutoPayItem />}
      footer={<Button variant="tertiary">Change auto-pay account</Button>}
    />
  );
};

export default HomeHighlightCard;
