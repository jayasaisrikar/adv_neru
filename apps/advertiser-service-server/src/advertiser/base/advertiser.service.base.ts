/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { PrismaService } from "../../prisma/prisma.service";

import {
  Prisma,
  Advertiser as PrismaAdvertiser,
  AdLocation as PrismaAdLocation,
  AdSpend as PrismaAdSpend,
  BusinessCrypto as PrismaBusinessCrypto,
} from "@prisma/client";

export class AdvertiserServiceBase {
  constructor(protected readonly prisma: PrismaService) {}

  async count(
    args: Omit<Prisma.AdvertiserCountArgs, "select">
  ): Promise<number> {
    return this.prisma.advertiser.count(args);
  }

  async advertisers<T extends Prisma.AdvertiserFindManyArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdvertiserFindManyArgs>
  ): Promise<PrismaAdvertiser[]> {
    return this.prisma.advertiser.findMany<Prisma.AdvertiserFindManyArgs>(args);
  }
  async advertiser<T extends Prisma.AdvertiserFindUniqueArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdvertiserFindUniqueArgs>
  ): Promise<PrismaAdvertiser | null> {
    return this.prisma.advertiser.findUnique(args);
  }
  async createAdvertiser<T extends Prisma.AdvertiserCreateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdvertiserCreateArgs>
  ): Promise<PrismaAdvertiser> {
    return this.prisma.advertiser.create<T>(args);
  }
  async updateAdvertiser<T extends Prisma.AdvertiserUpdateArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdvertiserUpdateArgs>
  ): Promise<PrismaAdvertiser> {
    return this.prisma.advertiser.update<T>(args);
  }
  async deleteAdvertiser<T extends Prisma.AdvertiserDeleteArgs>(
    args: Prisma.SelectSubset<T, Prisma.AdvertiserDeleteArgs>
  ): Promise<PrismaAdvertiser> {
    return this.prisma.advertiser.delete(args);
  }

  async findAdLocations(
    parentId: string,
    args: Prisma.AdLocationFindManyArgs
  ): Promise<PrismaAdLocation[]> {
    return this.prisma.advertiser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .adLocations(args);
  }

  async findAdSpends(
    parentId: string,
    args: Prisma.AdSpendFindManyArgs
  ): Promise<PrismaAdSpend[]> {
    return this.prisma.advertiser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .adSpends(args);
  }

  async findBusinessCryptos(
    parentId: string,
    args: Prisma.BusinessCryptoFindManyArgs
  ): Promise<PrismaBusinessCrypto[]> {
    return this.prisma.advertiser
      .findUniqueOrThrow({
        where: { id: parentId },
      })
      .businessCryptos(args);
  }
}
