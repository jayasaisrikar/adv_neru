import { Advertiser } from "../advertiser/Advertiser";

export type BusinessCrypto = {
  advertiser?: Advertiser | null;
  amountAcquired: number | null;
  createdAt: Date;
  dateAcquired: Date | null;
  id: string;
  updatedAt: Date;
};
