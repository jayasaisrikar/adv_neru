import { AdLocation } from "../adLocation/AdLocation";
import { AdSpend } from "../adSpend/AdSpend";
import { BusinessCrypto } from "../businessCrypto/BusinessCrypto";

export type Advertiser = {
  adLocations?: Array<AdLocation>;
  adSpends?: Array<AdSpend>;
  businessCryptos?: Array<BusinessCrypto>;
  createdAt: Date;
  email: string | null;
  id: string;
  name: string | null;
  updatedAt: Date;
};
