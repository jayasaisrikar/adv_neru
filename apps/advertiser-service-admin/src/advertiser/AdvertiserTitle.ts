import { Advertiser as TAdvertiser } from "../api/advertiser/Advertiser";

export const ADVERTISER_TITLE_FIELD = "name";

export const AdvertiserTitle = (record: TAdvertiser): string => {
  return record.name?.toString() || String(record.id);
};
