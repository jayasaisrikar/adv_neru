import * as React from "react";
import {
  Create,
  SimpleForm,
  CreateProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AdvertiserTitle } from "../advertiser/AdvertiserTitle";

export const AdLocationCreate = (props: CreateProps): React.ReactElement => {
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
        <TextInput label="locationName" source="locationName" />
        <TextInput label="virtualWorld" source="virtualWorld" />
      </SimpleForm>
    </Create>
  );
};
