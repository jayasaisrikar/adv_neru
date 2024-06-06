import { AdvertiserWhereUniqueInput } from "../advertiser/AdvertiserWhereUniqueInput";

export type AdLocationUpdateInput = {
  advertiser?: AdvertiserWhereUniqueInput | null;
  locationName?: string | null;
  virtualWorld?: string | null;
};
