import { AdvertiserWhereUniqueInput } from "../advertiser/AdvertiserWhereUniqueInput";

export type AdSpendCreateInput = {
  advertiser?: AdvertiserWhereUniqueInput | null;
  amount?: number | null;
  date?: Date | null;
};
