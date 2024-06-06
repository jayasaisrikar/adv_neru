import * as React from "react";
import {
  List,
  Datagrid,
  ListProps,
  ReferenceField,
  TextField,
  DateField,
} from "react-admin";
import Pagination from "../Components/Pagination";
import { ADVERTISER_TITLE_FIELD } from "../advertiser/AdvertiserTitle";

export const BusinessCryptoList = (props: ListProps): React.ReactElement => {
  return (
    <List
      {...props}
      bulkActionButtons={false}
      title={"BusinessCryptos"}
      perPage={50}
      pagination={<Pagination />}
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
    </List>
  );
};
