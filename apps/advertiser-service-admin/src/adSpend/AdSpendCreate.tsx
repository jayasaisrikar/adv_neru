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

export const AdSpendCreate = (props: CreateProps): React.ReactElement => {
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
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="date" source="date" />
      </SimpleForm>
    </Create>
  );
};
