import * as graphql from "@nestjs/graphql";
import { AdSpendResolverBase } from "./base/adSpend.resolver.base";
import { AdSpend } from "./base/AdSpend";
import { AdSpendService } from "./adSpend.service";

@graphql.Resolver(() => AdSpend)
export class AdSpendResolver extends AdSpendResolverBase {
  constructor(protected readonly service: AdSpendService) {
    super(service);
  }
}
