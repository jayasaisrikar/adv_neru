import { AdLocationUpdateManyWithoutAdvertisersInput } from "./AdLocationUpdateManyWithoutAdvertisersInput";
import { AdSpendUpdateManyWithoutAdvertisersInput } from "./AdSpendUpdateManyWithoutAdvertisersInput";
import { BusinessCryptoUpdateManyWithoutAdvertisersInput } from "./BusinessCryptoUpdateManyWithoutAdvertisersInput";

export type AdvertiserUpdateInput = {
  adLocations?: AdLocationUpdateManyWithoutAdvertisersInput;
  adSpends?: AdSpendUpdateManyWithoutAdvertisersInput;
  businessCryptos?: BusinessCryptoUpdateManyWithoutAdvertisersInput;
  email?: string | null;
  name?: string | null;
};
