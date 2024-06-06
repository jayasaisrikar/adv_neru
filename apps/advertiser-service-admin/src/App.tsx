import React, { useEffect, useState } from "react";
import { Admin, DataProvider, Resource } from "react-admin";
import buildGraphQLProvider from "./data-provider/graphqlDataProvider";
import { theme } from "./theme/theme";
import Login from "./Login";
import "./App.scss";
import Dashboard from "./pages/Dashboard";
import { AdLocationList } from "./adLocation/AdLocationList";
import { AdLocationCreate } from "./adLocation/AdLocationCreate";
import { AdLocationEdit } from "./adLocation/AdLocationEdit";
import { AdLocationShow } from "./adLocation/AdLocationShow";
import { AdSpendList } from "./adSpend/AdSpendList";
import { AdSpendCreate } from "./adSpend/AdSpendCreate";
import { AdSpendEdit } from "./adSpend/AdSpendEdit";
import { AdSpendShow } from "./adSpend/AdSpendShow";
import { AdvertiserList } from "./advertiser/AdvertiserList";
import { AdvertiserCreate } from "./advertiser/AdvertiserCreate";
import { AdvertiserEdit } from "./advertiser/AdvertiserEdit";
import { AdvertiserShow } from "./advertiser/AdvertiserShow";
import { BusinessCryptoList } from "./businessCrypto/BusinessCryptoList";
import { BusinessCryptoCreate } from "./businessCrypto/BusinessCryptoCreate";
import { BusinessCryptoEdit } from "./businessCrypto/BusinessCryptoEdit";
import { BusinessCryptoShow } from "./businessCrypto/BusinessCryptoShow";
import { jwtAuthProvider } from "./auth-provider/ra-auth-jwt";

const App = (): React.ReactElement => {
  const [dataProvider, setDataProvider] = useState<DataProvider | null>(null);
  useEffect(() => {
    buildGraphQLProvider
      .then((provider: any) => {
        setDataProvider(() => provider);
      })
      .catch((error: any) => {
        console.log(error);
      });
  }, []);
  if (!dataProvider) {
    return <div>Loading</div>;
  }
  return (
    <div className="App">
      <Admin
        title={"AdvertiserService"}
        dataProvider={dataProvider}
        authProvider={jwtAuthProvider}
        theme={theme}
        dashboard={Dashboard}
        loginPage={Login}
      >
        <Resource
          name="AdLocation"
          list={AdLocationList}
          edit={AdLocationEdit}
          create={AdLocationCreate}
          show={AdLocationShow}
        />
        <Resource
          name="AdSpend"
          list={AdSpendList}
          edit={AdSpendEdit}
          create={AdSpendCreate}
          show={AdSpendShow}
        />
        <Resource
          name="Advertiser"
          list={AdvertiserList}
          edit={AdvertiserEdit}
          create={AdvertiserCreate}
          show={AdvertiserShow}
        />
        <Resource
          name="BusinessCrypto"
          list={BusinessCryptoList}
          edit={BusinessCryptoEdit}
          create={BusinessCryptoCreate}
          show={BusinessCryptoShow}
        />
      </Admin>
    </div>
  );
};

export default App;
