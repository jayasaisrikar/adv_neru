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

export const AdSpendEdit = (props: EditProps): React.ReactElement => {
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
        <NumberInput label="amount" source="amount" />
        <DateTimeInput label="date" source="date" />
      </SimpleForm>
    </Edit>
  );
};
