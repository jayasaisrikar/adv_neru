import { AdvertiserWhereUniqueInput } from "../advertiser/AdvertiserWhereUniqueInput";

export type BusinessCryptoUpdateInput = {
  advertiser?: AdvertiserWhereUniqueInput | null;
  amountAcquired?: number | null;
  dateAcquired?: Date | null;
};
