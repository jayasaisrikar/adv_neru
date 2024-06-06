import { AdvertiserWhereUniqueInput } from "../advertiser/AdvertiserWhereUniqueInput";
import { FloatNullableFilter } from "../../util/FloatNullableFilter";
import { DateTimeNullableFilter } from "../../util/DateTimeNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type BusinessCryptoWhereInput = {
  advertiser?: AdvertiserWhereUniqueInput;
  amountAcquired?: FloatNullableFilter;
  dateAcquired?: DateTimeNullableFilter;
  id?: StringFilter;
};
