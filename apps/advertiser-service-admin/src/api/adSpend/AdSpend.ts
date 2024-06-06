import { Advertiser } from "../advertiser/Advertiser";

export type AdSpend = {
  advertiser?: Advertiser | null;
  amount: number | null;
  createdAt: Date;
  date: Date | null;
  id: string;
  updatedAt: Date;
};
