import { AdvertiserWhereUniqueInput } from "../advertiser/AdvertiserWhereUniqueInput";

export type BusinessCryptoCreateInput = {
  advertiser?: AdvertiserWhereUniqueInput | null;
  amountAcquired?: number | null;
  dateAcquired?: Date | null;
};
