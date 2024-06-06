import { AdvertiserWhereInput } from "./AdvertiserWhereInput";
import { AdvertiserOrderByInput } from "./AdvertiserOrderByInput";

export type AdvertiserFindManyArgs = {
  where?: AdvertiserWhereInput;
  orderBy?: Array<AdvertiserOrderByInput>;
  skip?: number;
  take?: number;
};
