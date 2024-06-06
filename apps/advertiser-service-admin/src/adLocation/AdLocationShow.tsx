import * as React from "react";
import {
  Show,
  SimpleShowLayout,
  ShowProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import { ADVERTISER_TITLE_FIELD } from "../advertiser/AdvertiserTitle";

export const AdLocationShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <ReferenceField
          label="Advertiser"
          source="advertiser.id"
          reference="Advertiser"
        >
          <TextField source={ADVERTISER_TITLE_FIELD} />
        </ReferenceField>
        <DateField source="createdAt" label="Created At" />
        <TextField label="ID" source="id" />
        <TextField label="locationName" source="locationName" />
        <DateField source="updatedAt" label="Updated At" />
        <TextField label="virtualWorld" source="virtualWorld" />
      </SimpleShowLayout>
    </Show>
  );
};
