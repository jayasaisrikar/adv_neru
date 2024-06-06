import { AdSpendWhereInput } from "./AdSpendWhereInput";
import { AdSpendOrderByInput } from "./AdSpendOrderByInput";

export type AdSpendFindManyArgs = {
  where?: AdSpendWhereInput;
  orderBy?: Array<AdSpendOrderByInput>;
  skip?: number;
  take?: number;
};
