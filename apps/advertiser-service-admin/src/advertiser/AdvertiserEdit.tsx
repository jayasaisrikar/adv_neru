import * as React from "react";

import {
  Edit,
  SimpleForm,
  EditProps,
  ReferenceArrayInput,
  SelectArrayInput,
  TextInput,
} from "react-admin";

import { AdLocationTitle } from "../adLocation/AdLocationTitle";
import { AdSpendTitle } from "../adSpend/AdSpendTitle";
import { BusinessCryptoTitle } from "../businessCrypto/BusinessCryptoTitle";

export const AdvertiserEdit = (props: EditProps): React.ReactElement => {
  return (
    <Edit {...props}>
      <SimpleForm>
        <ReferenceArrayInput
          source="adLocations"
          reference="AdLocation"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdLocationTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="adSpends"
          reference="AdSpend"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={AdSpendTitle} />
        </ReferenceArrayInput>
        <ReferenceArrayInput
          source="businessCryptos"
          reference="BusinessCrypto"
          parse={(value: any) => value && value.map((v: any) => ({ id: v }))}
          format={(value: any) => value && value.map((v: any) => v.id)}
        >
          <SelectArrayInput optionText={BusinessCryptoTitle} />
        </ReferenceArrayInput>
        <TextInput label="email" source="email" type="email" />
        <TextInput label="name" source="name" />
      </SimpleForm>
    </Edit>
  );
};
