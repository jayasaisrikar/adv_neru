import { AdvertiserWhereUniqueInput } from "../advertiser/AdvertiserWhereUniqueInput";

export type AdLocationCreateInput = {
  advertiser?: AdvertiserWhereUniqueInput | null;
  locationName?: string | null;
  virtualWorld?: string | null;
};
