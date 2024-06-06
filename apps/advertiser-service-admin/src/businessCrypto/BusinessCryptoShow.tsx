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

export const BusinessCryptoShow = (props: ShowProps): React.ReactElement => {
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
        <TextField label="amountAcquired" source="amountAcquired" />
        <DateField source="createdAt" label="Created At" />
        <TextField label="dateAcquired" source="dateAcquired" />
        <TextField label="ID" source="id" />
        <DateField source="updatedAt" label="Updated At" />
      </SimpleShowLayout>
    </Show>
  );
};
