import { BusinessCryptoWhereInput } from "./BusinessCryptoWhereInput";
import { BusinessCryptoOrderByInput } from "./BusinessCryptoOrderByInput";

export type BusinessCryptoFindManyArgs = {
  where?: BusinessCryptoWhereInput;
  orderBy?: Array<BusinessCryptoOrderByInput>;
  skip?: number;
  take?: number;
};
