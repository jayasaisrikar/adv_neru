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
import { BusinessCrypto } from "./BusinessCrypto";
import { BusinessCryptoCountArgs } from "./BusinessCryptoCountArgs";
import { BusinessCryptoFindManyArgs } from "./BusinessCryptoFindManyArgs";
import { BusinessCryptoFindUniqueArgs } from "./BusinessCryptoFindUniqueArgs";
import { CreateBusinessCryptoArgs } from "./CreateBusinessCryptoArgs";
import { UpdateBusinessCryptoArgs } from "./UpdateBusinessCryptoArgs";
import { DeleteBusinessCryptoArgs } from "./DeleteBusinessCryptoArgs";
import { Advertiser } from "../../advertiser/base/Advertiser";
import { BusinessCryptoService } from "../businessCrypto.service";
@graphql.Resolver(() => BusinessCrypto)
export class BusinessCryptoResolverBase {
  constructor(protected readonly service: BusinessCryptoService) {}

  async _businessCryptosMeta(
    @graphql.Args() args: BusinessCryptoCountArgs
  ): Promise<MetaQueryPayload> {
    const result = await this.service.count(args);
    return {
      count: result,
    };
  }

  @graphql.Query(() => [BusinessCrypto])
  async businessCryptos(
    @graphql.Args() args: BusinessCryptoFindManyArgs
  ): Promise<BusinessCrypto[]> {
    return this.service.businessCryptos(args);
  }

  @graphql.Query(() => BusinessCrypto, { nullable: true })
  async businessCrypto(
    @graphql.Args() args: BusinessCryptoFindUniqueArgs
  ): Promise<BusinessCrypto | null> {
    const result = await this.service.businessCrypto(args);
    if (result === null) {
      return null;
    }
    return result;
  }

  @graphql.Mutation(() => BusinessCrypto)
  async createBusinessCrypto(
    @graphql.Args() args: CreateBusinessCryptoArgs
  ): Promise<BusinessCrypto> {
    return await this.service.createBusinessCrypto({
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

  @graphql.Mutation(() => BusinessCrypto)
  async updateBusinessCrypto(
    @graphql.Args() args: UpdateBusinessCryptoArgs
  ): Promise<BusinessCrypto | null> {
    try {
      return await this.service.updateBusinessCrypto({
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

  @graphql.Mutation(() => BusinessCrypto)
  async deleteBusinessCrypto(
    @graphql.Args() args: DeleteBusinessCryptoArgs
  ): Promise<BusinessCrypto | null> {
    try {
      return await this.service.deleteBusinessCrypto(args);
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
    @graphql.Parent() parent: BusinessCrypto
  ): Promise<Advertiser | null> {
    const result = await this.service.getAdvertiser(parent.id);

    if (!result) {
      return null;
    }
    return result;
  }

  @graphql.Query(() => Number)
  async FetchTotalBusinessCrypto(
    @graphql.Args()
    args: BusinessCryptoFindManyArgs
  ): Promise<number> {
    return this.service.FetchTotalBusinessCrypto(args);
  }

  @graphql.Query(() => String)
  async GetTotalBusinessCryptoAcquired(
    @graphql.Args()
    args: string
  ): Promise<string> {
    return this.service.GetTotalBusinessCryptoAcquired(args);
  }
}
