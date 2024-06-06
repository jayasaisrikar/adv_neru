import * as graphql from "@nestjs/graphql";
import { AdLocationResolverBase } from "./base/adLocation.resolver.base";
import { AdLocation } from "./base/AdLocation";
import { AdLocationService } from "./adLocation.service";

@graphql.Resolver(() => AdLocation)
export class AdLocationResolver extends AdLocationResolverBase {
  constructor(protected readonly service: AdLocationService) {
    super(service);
  }
}
