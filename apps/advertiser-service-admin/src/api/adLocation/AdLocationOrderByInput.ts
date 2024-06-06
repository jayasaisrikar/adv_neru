import { SortOrder } from "../../util/SortOrder";

export type AdLocationOrderByInput = {
  advertiserId?: SortOrder;
  createdAt?: SortOrder;
  id?: SortOrder;
  locationName?: SortOrder;
  updatedAt?: SortOrder;
  virtualWorld?: SortOrder;
};
