import { AdLocationListRelationFilter } from "../adLocation/AdLocationListRelationFilter";
import { AdSpendListRelationFilter } from "../adSpend/AdSpendListRelationFilter";
import { BusinessCryptoListRelationFilter } from "../businessCrypto/BusinessCryptoListRelationFilter";
import { StringNullableFilter } from "../../util/StringNullableFilter";
import { StringFilter } from "../../util/StringFilter";

export type AdvertiserWhereInput = {
  adLocations?: AdLocationListRelationFilter;
  adSpends?: AdSpendListRelationFilter;
  businessCryptos?: BusinessCryptoListRelationFilter;
  email?: StringNullableFilter;
  id?: StringFilter;
  name?: StringNullableFilter;
};
