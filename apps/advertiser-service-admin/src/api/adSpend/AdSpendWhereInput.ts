import { AdvertiserWhereUniqueInput } from "../advertiser/AdvertiserWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdSpendWhereInput = {
  advertiser?: AdvertiserWhereUniqueInput;
  amount?: FloatNullableFilter;
  date?: DateTimeNullableFilter;
  id?: StringFilter;
};
