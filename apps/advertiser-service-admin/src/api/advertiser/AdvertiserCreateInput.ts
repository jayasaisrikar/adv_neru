import { AdLocationCreateNestedManyWithoutAdvertisersInput } from "./AdLocationCreateNestedManyWithoutAdvertisersInput";
import { AdSpendCreateNestedManyWithoutAdvertisersInput } from "./AdSpendCreateNestedManyWithoutAdvertisersInput";
import { BusinessCryptoCreateNestedManyWithoutAdvertisersInput } from "./BusinessCryptoCreateNestedManyWithoutAdvertisersInput";

export type AdvertiserCreateInput = {
  adLocations?: AdLocationCreateNestedManyWithoutAdvertisersInput;
  adSpends?: AdSpendCreateNestedManyWithoutAdvertisersInput;
  businessCryptos?: BusinessCryptoCreateNestedManyWithoutAdvertisersInput;
  email?: string | null;
  name?: string | null;
};
