import { AdvertiserWhereUniqueInput } from "../advertiser/AdvertiserWhereUniqueInput";

export type AdSpendUpdateInput = {
  advertiser?: AdvertiserWhereUniqueInput | null;
  amount?: number | null;
  date?: Date | null;
};
