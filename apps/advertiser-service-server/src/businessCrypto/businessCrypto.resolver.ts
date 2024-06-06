import * as graphql from "@nestjs/graphql";
import { BusinessCryptoResolverBase } from "./base/businessCrypto.resolver.base";
import { BusinessCrypto } from "./base/BusinessCrypto";
import { BusinessCryptoService } from "./businessCrypto.service";

@graphql.Resolver(() => BusinessCrypto)
export class BusinessCryptoResolver extends BusinessCryptoResolverBase {
  constructor(protected readonly service: BusinessCryptoService) {
    super(service);
  }
}
