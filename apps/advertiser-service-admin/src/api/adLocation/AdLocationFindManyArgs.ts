import { AdLocationWhereInput } from "./AdLocationWhereInput";
import { AdLocationOrderByInput } from "./AdLocationOrderByInput";

export type AdLocationFindManyArgs = {
  where?: AdLocationWhereInput;
  orderBy?: Array<AdLocationOrderByInput>;
  skip?: number;
  take?: number;
};
