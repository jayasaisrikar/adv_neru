import * as React from "react";
import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceInput,
  SelectInput,
  TextInput,
} from "react-admin";
import { AdvertiserTitle } from "../advertiser/AdvertiserTitle";

export const AdLocationEdit = (props: EditProps): React.ReactElement => {
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
        <TextInput label="locationName" source="locationName" />
        <TextInput label="virtualWorld" source="virtualWorld" />
      </SimpleForm>
    </Edit>
  );
};
