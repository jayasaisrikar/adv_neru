import { BusinessCrypto as TBusinessCrypto } from "../api/businessCrypto/BusinessCrypto";

export const BUSINESSCRYPTO_TITLE_FIELD = "id";

export const BusinessCryptoTitle = (record: TBusinessCrypto): string => {
  return record.id?.toString() || String(record.id);
};
