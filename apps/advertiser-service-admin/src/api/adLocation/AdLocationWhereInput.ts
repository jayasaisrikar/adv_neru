import { AdvertiserWhereUniqueInput } from "../advertiser/AdvertiserWhereUniqueInput";
import { StringFilter } from "../../util/StringFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";

export type AdLocationWhereInput = {
  advertiser?: AdvertiserWhereUniqueInput;
  id?: StringFilter;
  locationName?: StringNullableFilter;
  virtualWorld?: StringNullableFilter;
};
