import { Advertiser } from "../advertiser/Advertiser";

export type AdLocation = {
  advertiser?: Advertiser | null;
  createdAt: Date;
  id: string;
  locationName: string | null;
  updatedAt: Date;
  virtualWorld: string | null;
};
