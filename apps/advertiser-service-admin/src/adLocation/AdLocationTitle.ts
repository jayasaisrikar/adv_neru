import { AdLocation as TAdLocation } from "../api/adLocation/AdLocation";

export const ADLOCATION_TITLE_FIELD = "locationName";

export const AdLocationTitle = (record: TAdLocation): string => {
  return record.locationName?.toString() || String(record.id);
};
