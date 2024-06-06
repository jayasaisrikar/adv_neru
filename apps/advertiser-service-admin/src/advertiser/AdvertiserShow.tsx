import * as React from "react";

import {
  Show,
  SimpleShowLayout,
  ShowProps,
  DateField,
  TextField,
  ReferenceManyField,
  Datagrid,
  ReferenceField,
} from "react-admin";

import { ADVERTISER_TITLE_FIELD } from "./AdvertiserTitle";

export const AdvertiserShow = (props: ShowProps): React.ReactElement => {
  return (
    <Show {...props}>
      <SimpleShowLayout>
        <DateField source="createdAt" label="Created At" />
        <TextField label="email" source="email" />
        <TextField label="ID" source="id" />
        <TextField label="name" source="name" />
        <DateField source="updatedAt" label="Updated At" />
        <ReferenceManyField
          reference="AdLocation"
          target="advertiserId"
          label="AdLocations"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="AdSpend"
          target="advertiserId"
          label="AdSpends"
        >
          <Datagrid rowClick="show">
            <ReferenceField
              label="Advertiser"
              source="advertiser.id"
              reference="Advertiser"
            >
              <TextField source={ADVERTISER_TITLE_FIELD} />
            </ReferenceField>
            <TextField label="amount" source="amount" />
            <DateField source="createdAt" label="Created At" />
            <TextField label="date" source="date" />
            <TextField label="ID" source="id" />
            <DateField source="updatedAt" label="Updated At" />
          </Datagrid>
        </ReferenceManyField>
        <ReferenceManyField
          reference="BusinessCrypto"
          target="advertiserId"
          label="BusinessCryptos"
        >
          <Datagrid rowClick="show">
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
          </Datagrid>
        </ReferenceManyField>
      </SimpleShowLayout>
    </Show>
  );
};
