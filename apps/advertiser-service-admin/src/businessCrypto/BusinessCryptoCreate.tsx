import * as React from "react";

import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { AdvertiserTitle } from "../advertiser/AdvertiserTitle";

export const BusinessCryptoCreate = (
  props: CreateProps
): React.ReactElement => {
  return (
    <Create {...props}>
      <SimpleForm>
        <ReferenceInput
          source="advertiser.id"
          reference="Advertiser"
          label="Advertiser"
        >
          <SelectInput optionText={AdvertiserTitle} />
        </ReferenceInput>
        <NumberInput label="amountAcquired" source="amountAcquired" />
        <DateTimeInput label="dateAcquired" source="dateAcquired" />
      </SimpleForm>
    </Create>
  );
};
