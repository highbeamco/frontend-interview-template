import { toDecimal, Dinero } from "dinero.js";

export const createIntlFormatter = (locale: Intl.LocalesArgument, options = {}) => {
  return function formatter<TAmount>(dineroObject: Dinero<TAmount>) {
    return toDecimal(dineroObject, ({ value, currency }) => {
      return Number(value).toLocaleString(locale, {
        ...options,
        style: "currency",
        currency: currency.code,
      });
    });
  };
};

export const formatUsd = createIntlFormatter("en-US");
