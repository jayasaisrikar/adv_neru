import { AdSpend as TAdSpend } from "../api/adSpend/AdSpend";

export const ADSPEND_TITLE_FIELD = "id";

export const AdSpendTitle = (record: TAdSpend): string => {
  return record.id?.toString() || String(record.id);
};
