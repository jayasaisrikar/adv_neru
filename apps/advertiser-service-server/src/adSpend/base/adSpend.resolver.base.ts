/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import * as graphql from "@nestjs/graphql";
import { GraphQLError } from "graphql";
import { isRecordNotFoundError } from "../../prisma.util";
import { MetaQueryPayload } from "../../util/MetaQueryPayload";
import { AdSpend } from "./AdSpend";
import { AdSpendCountArgs } from "./AdSpendCountArgs";
import { AdSpendFindManyArgs } from "./AdSpendFindManyArgs";
import { AdSpendFindUniqueArgs } from "./AdSpendFindUniqueArgs";
import { CreateAdSpendArgs } from "./CreateAdSpendArgs";
import { UpdateAdSpendArgs } from "./UpdateAdSpendArgs";
import { DeleteAdSpendArgs } from "./DeleteAdSpendArgs";
import { Advertiser } from "../../advertiser/base/Advertiser";
import { AdSpendService } from "../adSpend.service";
@graphql.Resolver(() => AdSpend)
export class AdSpendResolverBase {
  constructor(protected readonly service: AdSpendService) {}

  async _adSpendsMeta(
    @graphql.Args() args: AdSpendCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [AdSpend])
  async adSpends(
    @graphql.Args() args: AdSpendFindManyArgs
  ): Promise<AdSpend[]> {
    return this.service.adSpends(args);
  }

  @graphql.Query(() => AdSpend, { nullable: true })
  async adSpend(
    @graphql.Args() args: AdSpendFindUniqueArgs
  ): Promise<AdSpend | null> {
    const result = await this.service.adSpend(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => AdSpend)
  async createAdSpend(
    @graphql.Args() args: CreateAdSpendArgs
  ): Promise<AdSpend> {
    return await this.service.createAdSpend({
      ...args,
      data: {
        ...args.data,

        advertiser: args.data.advertiser
          ? {
              connect: args.data.advertiser,
            }
          : undefined,
      },
    });
  }

  @graphql.Mutation(() => AdSpend)
  async updateAdSpend(
    @graphql.Args() args: UpdateAdSpendArgs
  ): Promise<AdSpend | null> {
    try {
      return await this.service.updateAdSpend({
        ...args,
        data: {
          ...args.data,

          advertiser: args.data.advertiser
            ? {
                connect: args.data.advertiser,
              }
            : undefined,
        },
      });
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.Mutation(() => AdSpend)
  async deleteAdSpend(
    @graphql.Args() args: DeleteAdSpendArgs
  ): Promise<AdSpend | null> {
    try {
      return await this.service.deleteAdSpend(args);
    } catch (error) {
      if (isRecordNotFoundError(error)) {
        throw new GraphQLError(
          `No resource was found for ${JSON.stringify(args.where)}`
        );
      }
      throw error;
    }
  }

  @graphql.ResolveField(() => Advertiser, {
    nullable: true,
    name: "advertiser",
  })
  async getAdvertiser(
    @graphql.Parent() parent: AdSpend
  ): Promise<Advertiser | null> {
    const result = await this.service.getAdvertiser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Query(() => Number)
  async FetchTotalAdSpend(
    @graphql.Args()
    args: AdSpendCountArgs
  ): Promise<number> {
    return this.service.FetchTotalAdSpend(args);
  }

  @graphql.Query(() => String)
  async GetTotalAdSpend(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetTotalAdSpend(args);
  }
}
