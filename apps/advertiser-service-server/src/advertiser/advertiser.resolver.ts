import * as graphql from "@nestjs/graphql";
import { AdvertiserResolverBase } from "./base/advertiser.resolver.base";
import { Advertiser } from "./base/Advertiser";
import { AdvertiserService } from "./advertiser.service";

@graphql.Resolver(() => Advertiser)
export class AdvertiserResolver extends AdvertiserResolverBase {
  constructor(protected readonly service: AdvertiserService) {
    super(service);
  }
}
