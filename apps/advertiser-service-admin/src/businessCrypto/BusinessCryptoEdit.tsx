import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  NumberInput,
  DateTimeInput,
} from "react-admin";

import { AdvertiserTitle } from "../advertiser/AdvertiserTitle";

export const BusinessCryptoEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
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
    </Edit>
  );
};
